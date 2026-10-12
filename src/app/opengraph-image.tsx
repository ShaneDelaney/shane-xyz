import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const alt = 'Shane Delaney. Find the story. Make it happen.';
export const size = { width:1200,height:630 };
export const contentType = 'image/png';
export default function Image(){return new ImageResponse(<div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'100%',height:'100%',padding:'64px 78px',background:'#171b19',color:'#f0eee5',fontFamily:'sans-serif'}}><div style={{display:'flex',justifyContent:'space-between',fontSize:20}}><span>Shane Delaney</span><span style={{color:'#b3b9ad'}}>Creative & content operations</span></div><div style={{display:'flex',flexDirection:'column',fontSize:86,lineHeight:1.06,letterSpacing:'-4px'}}><span>Find the story.</span><span style={{color:'#eca88b'}}>Make it happen.</span></div><div style={{display:'flex',justifyContent:'space-between',borderTop:'1px solid #66715f',paddingTop:24,fontSize:18,color:'#b3b9ad'}}><span>Storytelling → Audience → Launch</span><span>shanedelaney.xyz</span></div></div>,size);}
