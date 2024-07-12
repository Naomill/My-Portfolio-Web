
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="mt-20 mx-auto max-w-6xl grid grid-cols-[40%_60%]">
      <div>
        <div className="sticky top-20 grid grid-rows-[35%_45%_20%] h-screen">
          <div className='flex flex-col gap-5'>
            <img src="/logo.svg" alt="Saralee, Works" className='h-64 w-64' />
            <div className="text-xl w-5/6">I craft intuitive, beautiful, and responsive digital experiences. Explore my portfolio to see my work.</div>
            <div>
              <span className=" rounded-2xl bg-primaryPurple text-background text-bold py-2 px-5">
                View Resume
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </span>
            </div>
          </div>
          <div>Silde Bar</div>
          <div className="flex items-end">Link</div>
        </div>
      </div>
      <div>
          <div className="mb-96">Intro</div>
          <div className="mb-96">About</div>
          <div className="mb-96">Works</div>
      </div>
    </div>
  );
}
