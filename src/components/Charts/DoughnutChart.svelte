<script>
  let isOn;

  const updateDoughnutChart = on => {

  };
</script>

<div class="bg-white rounded-md dark:bg-darker">
  <!-- Card header -->
  <div
    class="flex items-center justify-between p-4 border-b dark:border-primary"
  >
    <h4 class="text-lg font-semibold text-gray-500 dark:text-light">
      Doughnut Chart
    </h4>
    <div class="flex items-center">
      <button
        class="relative focus:outline-none"
        on:click={() => {
          isOn = !isOn;
          updateDoughnutChart(isOn);
        }}
      >
        <div
          class="w-12 h-6 transition rounded-full outline-none bg-primary-100 dark:bg-primary-darker"
        />
        <div
          class="{isOn
            ? 'translate-x-6 bg-primary-light dark:bg-primary'
            : 'translate-x-0  bg-white dark:bg-primary-100'} absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform scale-110 rounded-full shadow-sm"
        />
      </button>
    </div>
  </div>
  <!-- Chart -->
  <div class="relative p-4 h-72">
    <canvas id="doughnutChart" />
  </div>
</div>