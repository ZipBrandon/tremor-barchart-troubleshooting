import type { MetaFunction } from "@remix-run/node";
import { BarChartHero } from '~/@/BarChartHero';
import { BarListHero, SparkChartHero } from '~/@/BarListHero';
import { Example } from '~/@/TestComponents';
import { AnotherComponent } from '~/@/AnotherComponent';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className={`text-blue-500 text-5xl`} >Welcome to Remix</h1>
      <div>
        <Example />
      </div>
      <div>
        <AnotherComponent />
      </div>
      <div>
        <BarChartHero />
      </div>
      <div>
        <BarListHero />
      </div>
      <div>
        <SparkChartHero />
      </div>
    </div>
  );
}
