import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-8 pt-20 pb-32 px-4 max-w-6xl mx-auto">
      <div className="md:w-2/3 space-y-4">
        <h1 className="text-4xl font-serif font-bold">About Me</h1>
        <p className="text-xl text-zinc-600 font-light">
          I am a passionate digital marketer with a strong background in social media management and content strategy. My journey began with a love for storytelling and has evolved into a career focused on elevating brands through strategic SEO, compelling copywriting, and effective content management.
        </p>
        <p className="text-xl text-zinc-600 font-light">
          Over the years, I have honed my skills in audience development, analytics growth, and narrative development, always striving to create engaging and impactful content.
        </p>
        <p className="text-xl text-zinc-600 font-light">
          My goal is to continue pushing the boundaries of digital marketing, exploring innovative ways to connect with audiences and drive brand success.
        </p>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <Image
          src="/assets/Shanedelaney.png"
          alt="About Me Image"
          width={350}
          height={525}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutMe; 