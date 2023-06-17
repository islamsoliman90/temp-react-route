export default function Yearltarget() {
  return (
    <div class="targets p-20 bg-white rad-10">
      <h2 class="mt-0 mb-10">Yearly Targets</h2>
      <p class="mt-0 mb-20 c-grey fs-15">Targets Of The Year</p>
      <div class="target-row mb-20 blue center-flex">
        <div class="icon center-flex">
          <i class="fa-solid fa-dollar-sign fa-lg c-blue"></i>
        </div>
        <div class="details">
          <span class="fs-14 c-grey">Money</span>
          <span class="d-block mt-5 mb-10 fw-bold">$20.000</span>
          <div class="progress p-relative">
            <span class="bg-blue blue" style={{ width: "80%" }}>
              <span class="bg-blue">80%</span>
            </span>
          </div>
        </div>
      </div>
      <div class="target-row mb-20 center-flex orange">
        <div class="icon center-flex">
          <i class="fa-solid fa-code fa-lg c-orange"></i>
        </div>
        <div class="details">
          <span class="fs-14 c-grey">Projects</span>
          <span class="d-block mt-5 mb-10 fw-bold">24</span>
          <div class="progress p-relative">
            <span class="bg-orange orange" style={{ width: "55%" }}>
              <span class="bg-orange">55%</span>
            </span>
          </div>
        </div>
      </div>
      <div class="target-row mb-20 center-flex green">
        <div class="icon center-flex">
          <i class="fa-solid fa-user fa-lg c-green"></i>
        </div>
        <div class="details">
          <span class="fs-14 c-grey">Team</span>
          <span class="d-block mt-5 mb-10 fw-bold">12</span>
          <div class="progress p-relative">
            <span class="bg-green green" style={{ width: "75%" }}>
              <span class="bg-green">75%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
