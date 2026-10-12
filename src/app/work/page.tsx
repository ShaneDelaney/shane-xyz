import {redirect} from 'next/navigation';
import {work} from '@/data/work';
import Experience from '@/components/portfolio/Experience';
export const metadata={title:'Experience | Shane Delaney'};
export default async function Work({searchParams}:{searchParams:Promise<{company?:string}>}){const {company}=await searchParams;if(company&&work.some(w=>w.id===company))redirect(`/work/${company}`);return <Experience/>}
