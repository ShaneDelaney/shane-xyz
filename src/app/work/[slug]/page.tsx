import {notFound} from 'next/navigation';
import {work} from '@/data/work';
import Experience from '@/components/portfolio/Experience';
export function generateStaticParams(){return work.map(w=>({slug:w.id}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const story=work.find(w=>w.id===slug);return {title:`${story?.company||'Experience'} | Shane Delaney`,description:story?.summary}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!work.some(w=>w.id===slug))notFound();return <Experience selected={slug}/>}
