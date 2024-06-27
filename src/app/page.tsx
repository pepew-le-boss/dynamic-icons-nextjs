import { Icon1 } from "@/components/Icon1";
// import { Icon2 } from "@/components/Icon2";
// import { Icon3 } from "@/components/Icon3";
// import { Icon4 } from "@/components/Icon4";


export default function Home() {
  return (
    <main>
      <p>Uncomment the icons you want to test and then build the app to analyze the bundle</p>
      <Icon1 name="AMPOULE" style={{ width: 100, height: 100, fill: "green" }} />
      {/* <Icon2 name="AMPOULE" style={{ width: 100, height: 100, fill: "yellow" }} /> */}
      {/* <Icon3 name="AMPOULE" style={{ width: 100, height: 100, fill: "blue" }} /> */}
      {/* <Icon4 name="AMPOULE" style={{ width: 100, height: 100, fill: "orange" }} /> */}
    </main>
  );
}
