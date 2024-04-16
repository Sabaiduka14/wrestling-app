export default function Team() {
  return (
    <main className="w-full h-[1800px] lg:h-[1000px] px-3">
      <div className="w-full h-[630px] mb-8 lg:h-[400px] rounded-full mt-4 py-5 px-4 flex flex-col items-center bg-[#f2e2cd]">
        <h1 className="text-4xl font-bold my-16 max-w-[450px] text-center">
          Meet Our Team Full Of Passionate Wrestlers
        </h1>
        <p className="text-xl font-semibold text-center max-w-4xl">
          At Wrestle Club We Believe the art of athleticism, and the magic of
          entertainment. We believe in creating moments that transcend the
          boundaries of the ring, uniting fans from all walks of life in a
          shared experience of excitement, drama, and passion.
        </p>
      </div>
      <h1 className="text-center my-6 text-4xl font-bold lg:mt-0 mb-24">
        Our Teams
      </h1>
      <div className="w-full h-[1200px] px-8 flex justify-around items-center flex-col md:flex-row">
        <div className="w-full h-full max-w-[400px]">
          <img
            src="https://bloximages.newyork1.vip.townnews.com/omaha.com/content/tncms/assets/v3/editorial/0/20/0200793e-540f-11e6-ae1b-2f4ed64c672d/5798d3cd7c71d.image.jpg"
            className="w-[400px] h-[265px] object-cover rounded-lg mb-2"
          />
          <h1 className="text-xl font-bold">Programs</h1>
          <p className="font-semibold text-lg my-1.5">Train Like a Champion</p>
          <p className="font-semibold text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            non. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi, tempora.
          </p>
        </div>
        <div className="w-full h-full max-w-[400px]">
          <img
            src="https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/2I2OGAWPRJFJDJTE7NTBI6HHC4.jpg"
            className="w-[400px] object-cover rounded-lg mb-2"
          />
          <h1 className="text-xl font-bold">Programs</h1>
          <p className="font-semibold text-lg my-1.5">Train Like a Champion</p>
          <p className="font-semibold text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            non. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi, tempora.
          </p>
        </div>
        <div className="w-full h-full max-w-[400px]">
          <img
            src="https://res.cloudinary.com/usopc-prod/image/upload/v1713132453/NGB%20Wrestling/Athlete%20Action/20240413-18-59-59-AJ_G8409-Enhanced-NR.jpg"
            className="w-[400px] object-cover rounded-lg mb-2"
          />
          <h1 className="text-xl font-bold">Programs</h1>
          <p className="font-semibold text-lg my-1.5">Train Like a Champion</p>
          <p className="font-semibold text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            non. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi, tempora.
          </p>
        </div>
      </div>
      <div></div>
      <div className="mb-[300px]"></div>
    </main>
  );
}
