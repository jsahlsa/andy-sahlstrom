import Nav from '../../components/nav';
import RenderMedia from '../../components/renderMedia';
import data from '/public/data.json';

export default function Home() {
  const pageData = data[2].timelapse[1].stepper_motion_timelapse_controller;
  console.log(pageData);

  return (
    <div className="container">
      <Nav />
      <main>
        <h1 className="title">Andy's new personal site</h1>

        <p className="description">
          Gonna be building in plain sight using{' '}
          <a href="https://nextjs.org">NEXT.JS</a>
        </p>
        <RenderMedia props={pageData} />
      </main>

      <footer>
        <p>coming soon…</p>
      </footer>
    </div>
  );
}
