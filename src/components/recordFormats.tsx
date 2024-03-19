import vinyl from "../assets/images/vinyl.avif";
import cassette from "../assets/images/cassette.avif";

export default function RecordFormats() {
  return (
    <div className="bg-[#e4e5de]">
      <p className="text-center text-3xl lg:py-24 lg:text:4xl px-8 py-10 font-semibold">
        Choose from two formats with promised quality
      </p>

      <div className="flex flex-col lg:flex-row lg:border-t-2 border-dark">
        <div className="text-center border-y-2 border-dark lg:border-y-0 lg:border-r-2 px-4 flex flex-col gap-8 py-8 lg:py-12 lg:px-20 lg:text-lg lg:flex-1">
          <p className="text-3xl font-semibold lg:text-4xl">Vinyl</p>
          <p>
            We know how special pressed records are to you. Our products are
            built for fans, by fans. We make it easy for artists to press vinyl,
            so the music you love can keep reaching ears in the most beautiful
            way.
          </p>
          <img src={vinyl} alt="" className="w-5/6 lg:w-full mx-auto" />
        </div>

        <div className="text-center px-4 flex flex-col gap-8 py-8 lg:py-12 lg:px-20 lg:text-lg lg:flex-1">
          <p className="text-3xl font-semibold lg:text-4xl">Cassette</p>

          <p>
            Cassettes have always been special to music fans and artists.
            Whether you are saving a recording of a great concert, or preserving
            an early demo, there’s no better way to keep that music close than
            on cassette tapes.
          </p>

          <img src={cassette} alt="" className="w-5/6 lg:w-full mx-auto" />
        </div>
      </div>
    </div>
  );
}
