"use client"

import Link from "next/link";
import Image from "next/image";

// import { Play, Pause } from "lucide-react";


export default function Home() {
  return (
    <>
      <div className="mt-5 min-h-20 w-full flex justify-center items-center border-0 px-4">
        <div className="min-h-full w-full max-w-7xl border-0 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-b from-[#00b3b37a] flex flex-col md:flex-row justify-between items-center pt-5 pl-4 pr-4 md:pl-8 md:pr-8 gap-5">
          {/* title */}
          <div className="flex-shrink-0">
            <p className="text-2xl md:text-4xl font-normal uppercase tracking-wide">
              modus
            </p>
          </div>
          {/* links */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-5">
            <Link
              className="p-1 text-sm md:text-base font-medium hover:bg-white rounded-md"
              href="/"
            >
              Home
            </Link>
            <Link
              className="p-1 text-sm md:text-base font-medium hover:bg-white rounded-md"
              href="/"
            >
              Our Platform <span className="text-xs md:text-sm font-extrabold">⌵</span>
            </Link>
            <Link
              className="p-1 text-sm md:text-base font-medium hover:bg-white rounded-md"
              href="/"
            >
              Our Services
            </Link>
            <Link
              className="p-1 text-sm md:text-base font-medium hover:bg-white rounded-md"
              href="/"
            >
              Our Offering
            </Link>
            <Link
              className="p-1 text-sm md:text-base font-medium hover:bg-white rounded-md"
              href="/"
            >
              Industry Solutions{" "}
              <span className="text-xs md:text-sm font-extrabold">⌵</span>
            </Link>
            <Link
              className="p-1 text-sm md:text-base font-medium hover:bg-white rounded-md"
              href="/"
            >
              Our Experiences
            </Link>
            <Link
              className="p-1 text-sm md:text-base font-medium hover:bg-white rounded-md"
              href="/"
            >
              Contact
            </Link>
          </div>
          {/* language & login */}
          <div className="flex justify-center items-center gap-2">
            <select className="w-32 md:w-50 h-5 text-xs md:text-sm border" name="" id="">
              <option value="0">Select Language</option>
              <option value="1">Afrikaans</option>
              <option value="2">Arabic</option>
              <option value="3">Bengali</option>
              <option value="4">Bulgarian</option>
              <option value="5">Chinese</option>
              <option value="6">Croatian</option>
              <option value="7">Czech</option>
              <option value="8">Danish</option>
              <option value="9">Dutch</option>
              <option value="10">English</option>
              <option value="11">Estonian</option>
              <option value="12">Finnish</option>
              <option value="13">French</option>
              <option value="14">German</option>
              <option value="15">Greek</option>
              <option value="16">Hebrew</option>
              <option value="17">Hindi</option>
              <option value="18">Hungarian</option>
              <option value="19">Indonesian</option>
              <option value="20">Italian</option>
              <option value="21">Japanese</option>
              <option value="22">Korean</option>
              <option value="23">Latvian</option>
              <option value="24">Lithuanian</option>
              <option value="25">Malay</option>
              <option value="26">Norwegian</option>
              <option value="27">Polish</option>
              <option value="28">Portuguese</option>
              <option value="29">Romanian</option>
              <option value="30">Russian</option>
              <option value="31">Slovak</option>
              <option value="32">Spanish</option>
              <option value="33">Swedish</option>
              <option value="34">Thai</option>
              <option value="35">Turkish</option>
            </select>
            <Link
              href="#"
              className="p-2 md:p-3 w-20 md:w-27 text-white font-medium flex justify-center border-0 bg-[#008282] rounded-lg text-sm md:text-base"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      {/* hero */}
      <div className="h-auto w-full grid place-content-center gap-5 px-4">

        {/* first div */}
        <div className="mt-20 md:mt-40 min-h-142.5 w-full max-w-4xl border-0 grid place-content-center gap-10">
          {/* adding main text one */}
          <div className="w-full flex justify-center items-center">
          <section className="w-full max-w-2xl text-center px-4">
            <p className="text-3xl md:text-6xl font-semibold bg-gradient-to-r from-black via-[#008282] to-black bg-clip-text text-transparent">Operational & Cybersecurity AI Capability Modelling</p>
          </section>
        </div>
          {/* adding text two */}
          <div className="w-full flex justify-center items-center mt-10">
            <section className="min-h-44 w-full max-w-xl text-center px-4">
            <p className="text-xl md:text-[30px] font-semibold">
              In the AI era, leading organisations no longer see their Operating Model as a static set of processes.
              They view it as living, learning, adaptive system - one that contiuously senses, predicts, protects, and evolves.
            </p>
          </section>
          </div>
          {/* adding text three */}
          <div className="w-full flex justify-center items-center mt-10">
            <section className="min-h-20 w-full max-w-2xl text-center px-4">
            <p className="text-base md:text-lg font-normal">
              Modus AI Capability Modelling unifies Operational Ai and Cybersecurity AI to create this next - generation foundation, helping enterprises redesign how work truly gets done
            </p>
          </section>
          </div>
        </div>

        {/* second div video */}
        <div className="min-h-screen w-full border-0 grid place-content-center gap-5 overflow-hidden px-4">
             <section className="w-full max-w-4xl aspect-video flex justify-center items-center">
              {/* adding video */}
              <iframe
              src="https://www.youtube.com/embed/JxGFz2xmBdg"
              title="Executive Overview Video"
              className="w-full h-full rounded-lg"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              ></iframe>
             </section>
        </div>

        {/* third div */}
        <div className="h-auto w-full grid place-content-center gap-12 mt-20">

  {/* Title */}
  <section className="w-full text-center">
    <p className="text-5xl font-semibold text-[#008282] tracking-tight">
      The AI Core Mission for Enterprises
    </p>
  </section>

  {/* Subtitle */}
  <section className="w-full text-center">
    <p className="text-3xl font-medium text-[#003d3d]">
      Redefining operating models to be intelligent, connected, and secure by design.
    </p>
  </section>

  {/* Lead-in */}
  <section className="w-full text-center">
    <p className="text-2xl font-normal text-gray-700">
      The critical question every C-suite leader must now answer:
    </p>
  </section>

  {/* Core Message */}
  <div className="w-full grid place-content-center gap-8 mt-6">
    <section className="w-[1100px] text-center">
      <p className="text-4xl font-semibold leading-snug text-black">
        How can AI make my operating model work smarter, safer, and faster — every single day?
      </p>
    </section>

    <section className="w-[1100px] text-center">
      <p className="text-2xl font-normal text-gray-700 leading-relaxed">
        Modus provides the structure, depth, and visibility to answer this with precision.
        Our integrated <b>Operational AI</b> and <b>Cybersecurity AI</b> framework equips
        organisations with the intelligence required to engineer operating models built
        for speed, trust, and long-term resilience.
      </p>
    </section>
  </div>

</div>

      {/* fourth div */}
      <div className="w-full min-h-280 grid place-content-center gap-8 md:gap-12 mt-20 px-4">

  {/* Title */}
  <section className="w-full text-center">
    <p className="text-4xl md:text-6xl font-semibold text-[#008282] tracking-tight">
      Unlocking the Future of Intelligent Operations
    </p>
  </section>

  {/* Statement */}
  <section className="w-full text-center">
    <p className="text-xl md:text-3xl font-semibold text-[#003d3d]">
      AI is not a tool. It is an operating capability.
    </p>
  </section>

  {/* Core Explanation */}
  <div className="w-full flex justify-center">
    <section className="w-full max-w-4xl text-center px-4">
      <p className="text-base md:text-lg font-normal text-gray-700 leading-relaxed">
        Most organisations have adopted AI in isolated pockets — process automation
        in one area, predictive models in another. However, sustainable value is only
        realised when AI is embedded <b>end-to-end across the value chain</b>, and when
        every AI-driven process is <b>secure by design</b>.
      </p>
    </section>
  </div>

  {/* Reference Insight */}
  <div className="w-full flex justify-center">
    <section className="w-full max-w-4xl text-center px-4">
      <p className="text-base md:text-lg font-normal text-gray-700 leading-relaxed">
        <b>From the reference material:</b> Operational AI enhances efficiency, insight,
        and decision precision, while Cybersecurity AI safeguards these advances by
        securing data, anticipating threats, and preserving trust across the value chain.
      </p>
    </section>
  </div>

  {/* Lead-in */}
  <div className="w-full flex justify-center">
    <section className="w-full max-w-4xl text-center px-4">
      <p className="text-base md:text-lg font-medium text-[#003d3d]">
        Together, they create an operating model that is:
      </p>
    </section>
  </div>

  {/* Capability List */}
  <div className="w-full flex justify-center">
    <section className="w-full max-w-3xl px-4">
      <ul className="list-disc pl-6 md:pl-8 text-base md:text-lg text-gray-800 leading-relaxed">
        <li><b>Adaptive:</b> Continuously learning and optimising performance</li>
        <li><b>Transparent:</b> Delivering clarity across decisions and operations</li>
        <li><b>Secure:</b> Protecting data, processes, and trust by design</li>
        <li><b>Predictive:</b> Anticipating outcomes, risks, and opportunities</li>
        <li><b>Resilient:</b> Sustaining performance under change and disruption</li>
      </ul>
    </section>
  </div>

  {/* Closing Statement */}
  <div className="w-full flex justify-center">
    <section className="w-full max-w-4xl text-center px-4">
      <p className="text-base md:text-lg font-medium text-[#003d3d]">
        AI is not a tool. It is an operating capability.
      </p>
    </section>
  </div>

</div>

      {/* fifth div */}
      <div className="w-full h-screen grid place-content-center gap-14 mt-20">

  {/* Title */}
  <section className="w-full text-center">
    <p className="text-5xl font-semibold text-[#008282] tracking-tight">
      Strategic Outcomes: Why This Matters Now
    </p>
  </section>

  {/* Lead Statement */}
  <div className="w-full flex justify-center">
    <section className="w-[1100px] text-center">
      <p className="text-3xl font-semibold text-[#003d3d]">
        By aligning Operational AI and Cybersecurity AI capabilities, organisations can:
      </p>
    </section>
  </div>

  {/* Outcomes List */}
  <div className="w-full flex justify-center">
    <section className="w-[1000px] text-lg font-normal text-gray-800 grid gap-4">
      <p>
        <span className="text-[#008282] font-semibold">✓</span>{" "}
        Convert fragmented processes into intelligent, connected value networks
      </p>
      <p>
        <span className="text-[#008282] font-semibold">✓</span>{" "}
        Build secure, adaptive operating models powered by real-time intelligence
      </p>
      <p>
        <span className="text-[#008282] font-semibold">✓</span>{" "}
        Shift from reactive firefighting to proactive, predictive decision-making
      </p>
      <p>
        <span className="text-[#008282] font-semibold">✓</span>{" "}
        Anticipate disruption and mitigate operational and cyber risk exposure
      </p>
      <p>
        <span className="text-[#008282] font-semibold">✓</span>{" "}
        Accelerate transformation while maintaining governance and control
      </p>
      <p>
        <span className="text-[#008282] font-semibold">✓</span>{" "}
        Build a resilient, future-ready AI-enabled enterprise portfolio
      </p>
    </section>
  </div>

</div>

      {/* sixth div */}
      <div className="w-full min-h-screen grid gap-8 md:gap-10 place-content-center px-4">

  {/* Title */}
  <div className="w-full flex justify-center">
    <section className="w-full max-w-4xl px-4">
      <p className="text-3xl md:text-5xl font-semibold text-[#008282] text-center leading-tight">
        AI Capability Types: Descriptions and Applications of Operational & Cybersecurity AI
        in Investment Banking
      </p>
    </section>
  </div>

  {/* Table */}
  <div className="w-full flex justify-center">
    <section className="w-full max-w-4xl overflow-x-auto">
      <table className="w-full min-w-[600px] border border-gray-300 bg-white text-left">
        <thead>
          <tr className="h-14">
            <th className="border border-gray-300 bg-[#008282] text-white px-4 text-sm md:text-base">
              AI Capability Type
            </th>
            <th className="border border-gray-300 bg-[#008282] text-white px-4 text-sm md:text-base">
              Description
            </th>
          </tr>
        </thead>

        <tbody className="text-gray-800">
          <tr className="min-h-20">
            <th className="border border-gray-300 px-4 font-medium text-sm md:text-base">
              Perceptive AI
            </th>
            <td className="border border-gray-300 px-4 text-sm md:text-base">
              Detects, senses, and interprets the environment through data, vision,
              sound, or signals—transforming raw inputs into actionable insights.
            </td>
          </tr>

          <tr className="min-h-20 bg-gray-50">
            <th className="border border-gray-300 px-4 font-medium text-sm md:text-base">
              Predictive AI
            </th>
            <td className="border border-gray-300 px-4 text-sm md:text-base">
              Anticipates future outcomes using historical data, statistical models,
              and machine learning to forecast risks, trends, and opportunities.
            </td>
          </tr>

          <tr className="min-h-20">
            <th className="border border-gray-300 px-4 font-medium text-sm md:text-base">
              Prescriptive AI
            </th>
            <td className="border border-gray-300 px-4 text-sm md:text-base">
              Recommends optimal actions by simulating multiple scenarios and outcomes,
              supporting smarter, safer, and more efficient decision-making.
            </td>
          </tr>

          <tr className="min-h-20 bg-gray-50">
            <th className="border border-gray-300 px-4 font-medium text-sm md:text-base">
              Cognitive AI
            </th>
            <td className="border border-gray-300 px-4 text-sm md:text-base">
              Understands, reasons, and communicates using natural language and
              contextual intelligence—enabling human-like dialogue and analysis.
            </td>
          </tr>

          <tr className="min-h-20">
            <th className="border border-gray-300 px-4 font-medium text-sm md:text-base">
              Autonomous AI
            </th>
            <td className="border border-gray-300 px-4 text-sm md:text-base">
              Operates independently with minimal human intervention, continuously
              learning to self-adjust, self-heal, and execute tasks safely.
            </td>
          </tr>

          <tr className="min-h-20 bg-gray-50">

      {/* seventh div */}
      <div className="h-screen w-full mt-20 grid gap-10 place-content-center">

  {/* Title */}
  <div className="w-full flex justify-center">
    <section>
      <p className="text-5xl font-semibold text-[#008282] text-center">
        How Modus Enables This Vision
      </p>
    </section>
  </div>

  {/* Subtitle */}
  <div className="w-full flex justify-center">
    <section className="w-[600px] text-center">
      <p className="text-lg font-medium italic text-gray-700">
        Value Chain Intelligence + Portfolio Precision
      </p>
    </section>
  </div>

  {/* Intro */}
  <div className="w-full flex justify-center">
    <section className="w-[900px] text-center">
      <p className="text-lg font-semibold text-gray-800">
        Using the Modus Framework, we analyse and align Operational AI and
        Cybersecurity AI across four critical dimensions:
      </p>
    </section>
  </div>

  {/* Dimension 1 */}
  <div className="w-full flex justify-center">
    <section className="w-[850px]">
      <p className="text-lg font-semibold">
        1. Touchpoint Analysis
      </p>
      <p className="text-base text-gray-700 mt-1">
        Precisely mapping where AI should intervene across the value chain—from
        strategy and design through production, delivery, service, and customer experience.
      </p>
    </section>
  </div>

  {/* Dimension 2 */}
  <div className="w-full flex justify-center">
    <section className="w-[850px]">
      <p className="text-lg font-semibold">
        2. Impact Assessment
      </p>
      <p className="text-base text-gray-700 mt-1">
        Quantifying value creation, cost efficiency, risk exposure, sustainability,
        and performance uplift at each process node.
      </p>
    </section>
  </div>

  {/* Dimension 3 */}
  <div className="w-full flex justify-center">
    <section className="w-[850px]">
      <p className="text-lg font-semibold">
        3. AI Portfolio Structuring
      </p>
      <p className="text-base text-gray-700 mt-1">
        Linking high-value AI opportunities with appropriate security controls,
        governance requirements, and enterprise priorities.
      </p>
    </section>
  </div>

  {/* Dimension 4 */}
  <div className="w-full flex justify-center">
    <section className="w-[850px]">
      <p className="text-lg font-semibold">
        4. Delivery Roadmap
      </p>
      <p className="text-base text-gray-700 mt-1">
        Designing phased, de-risked adoption—from pilots to enterprise-wide
        embedding—balancing <b>speed with control</b>.
      </p>
    </section>
  </div>

  {/* Closing */}
  <div className="w-full flex justify-center">
    <section className="text-center">
      <p className="text-lg font-semibold text-gray-800">
        The result is a clear, AI-forward transformation blueprint.
      </p>
    </section>
  </div>
</div>

      {/* eighth div */}
      <div className="w-full mt-15 grid gap-8 place-content-center">

  {/* Title */}
  <div className="w-full flex justify-center">
    <section>
      <p className="text-5xl font-semibold text-[#008282] text-center">
        AI Capability Types: Operational AI & Cybersecurity AI
      </p>
    </section>
  </div>

  {/* Intro */}
  <div className="w-full flex justify-center">
    <section className="w-[900px] text-center">
      <p className="text-base font-medium text-gray-700">
        The reference framework outlines seven core AI capability types—Perceptive,
        Predictive, Prescriptive, Cognitive, Autonomous, Generative, and Agentic.
        <br />
        Modus extends this into a dual-lens model combining
        <b> Operational AI</b> and <b>Cybersecurity AI</b>, enabling enterprise
        leaders to balance value creation with risk control.
      </p>
    </section>
  </div>

  {/* Operational AI */}
  <div className="w-full flex justify-center mt-6">
    <section className="w-[850px]">
      <p className="text-lg font-semibold">Operational AI includes:</p>
    </section>
  </div>

  <div className="w-full flex justify-center">
    <section className="w-[850px] bg-[#008282] rounded-lg p-4">
      <p className="text-base text-white">
        Operational AI focuses on enhancing efficiency, visibility, and decision
        precision across daily operations—mapping and optimising processes,
        teams, assets, and data flows end to end.
      </p>
    </section>
  </div>

  <div className="w-full flex justify-center">
    <section className="w-[850px]">
      <ul className="list-disc pl-6 text-gray-800">
        <li><b>Perceptive AI:</b> sensing operational signals</li>
        <li><b>Predictive AI:</b> forecasting outcomes and demand</li>
        <li><b>Prescriptive AI:</b> recommending optimal actions</li>
        <li><b>Cognitive AI:</b> language and contextual intelligence</li>
        <li><b>Autonomous AI:</b> self-running workflows and systems</li>
        <li><b>Generative AI:</b> creating content, simulations, and scenarios</li>
        <li><b>Agentic AI:</b> orchestrating multi-step intelligent activity</li>
      </ul>
    </section>
  </div>

  {/* Cybersecurity AI */}
  <div className="w-full flex justify-center mt-8">
    <section className="w-[850px]">
      <p className="text-lg font-semibold">Cybersecurity AI includes:</p>
    </section>
  </div>

  <div className="w-full flex justify-center">
    <section className="w-[850px] bg-[#003d3d] rounded-lg p-4">
      <p className="text-base text-white">
        Cybersecurity AI protects AI-enabled operations by securing data,
        detecting threats, predicting attacks, and enforcing governance—
        ensuring trust, resilience, and regulatory compliance.
      </p>
    </section>
  </div>

  <div className="w-full flex justify-center">
    <section className="w-[850px]">
      <ul className="list-disc pl-6 text-gray-800">
        <li><b>Perceptive AI:</b> detecting anomalies and intrusion signals</li>
        <li><b>Predictive AI:</b> anticipating cyber threats and vulnerabilities</li>
        <li><b>Prescriptive AI:</b> recommending mitigation and response actions</li>
        <li><b>Cognitive AI:</b> security analysis and incident reasoning</li>
        <li><b>Autonomous AI:</b> automated threat response and self-healing systems</li>
        <li><b>Generative AI:</b> attack simulation and defense testing</li>
        <li><b>Agentic AI:</b> coordinated, multi-layer security operations</li>
      </ul>
    </section>
  </div>

  {/* Closing */}
  <div className="w-full flex justify-center mt-6">
    <section className="text-center">
      <p className="text-lg font-medium text-gray-800">
        This dual-capability view ensures AI accelerates performance while remaining
        secure, governed, and trusted.
      </p>
    </section>
  </div>

</div>

      {/* ninth div */}
      <div className="w-full h-auto mt-50 grid gap-5">
           {/* first text */}
           <div className="w-full flex justify-center items-center">
            <section className="w-213">
              <p className="text-5xl font-semibold text-[#008282]">AI Capability Modelling in Action</p>
            </section>
           </div>
           {/* second text */}
           <div className="w-full flex justify-center items-center">
            <section className="w-213 text-center">
              <p className="text-md font-medium"><i>From Value Chain Modelling to Portfolio Design</i></p>
            </section>
           </div>
           {/* third text */}
           <div className="w-full flex justify-center items-center">
            <section className="w-213">
              <p>The PDF includes examples showing how Modus maps AI across complex organisations systems e.g. Investment Banking HR
                <br></br>
                These visuals demonstrate the power of mapping AI to functions, roles, processes and data flows to reveal where intelligence can automate, optimise and protect operations
              </p>
            </section>
           </div>
           {/* title */}
           <div className="w-full flex justify-center items-center">
            <section className="w-213">
              <p className="text-3xl font-semibold">Value Chain Modelling - Operational AI</p>
            </section>
           </div>
           {/* second text */}
           <div className="w-full flex justify-center items-center">
            <section className="w-213">
              <p>we map the full spectrum of operations and highlight where Operational AI can automate, optimise and elevate performance across processes.
                <br />
              This is reflected in the PDF models showcasing process-level AI overlays across end-to-end value streams
              </p>
            </section>
           </div>
           {/* third text */}
           <div className="w-full flex justify-center items-center">
            <section className="w-213">
              <p>This is reflected in the models showcasing process-level AI overlays across end-to-end value streams</p>
            </section>
           </div>
           {/* image */}
           <div className="w-full flex justify-center items-center">
            <section className="w-213 flex justify-center items-center">
                <Image src="/enterprise.png" alt="image" width={1000} height={1000}/>
            </section>
           </div>
      </div>

      {/* tenth div */}
      <div className="h-auto w-full grid gap-10 mt-15 place-content-center">

  {/* Title */}
  <div className="w-full flex justify-center">
    <section>
      <p className="text-5xl font-semibold text-[#008282] text-center">
        Portfolio Modelling: Operational AI
      </p>
    </section>
  </div>

  {/* Intro */}
  <div className="w-full flex justify-center">
    <section className="w-[850px] text-center">
      <p className="text-lg font-medium text-gray-700">
        By structuring AI opportunities into a coherent portfolio, Modus enables
        leadership teams to gain clear visibility into priority, sequencing, and value.
      </p>
    </section>
  </div>

  {/* Context */}
  <div className="w-full flex justify-center">
    <section className="w-[950px] text-center">
      <p className="text-2xl font-semibold text-gray-800">
        This is reflected in models that overlay AI capabilities at the process level
        across end-to-end value streams.
      </p>
    </section>
  </div>

  {/* Value List */}
  <div className="w-full flex justify-center">
    <section className="w-[850px]">
      <ul className="list-disc pl-6 text-gray-800 text-lg">
        <li>Where to invest for maximum operational impact</li>
        <li>How initiatives should be sequenced over time</li>
        <li>What value and performance uplift to expect</li>
        <li>Which processes require Cybersecurity AI safeguards</li>
        <li>What organisational, data, and technology dependencies exist</li>
      </ul>
    </section>
  </div>

  {/* Insight */}
  <div className="w-full flex justify-center">
    <section className="w-[900px] text-center">
      <p className="text-xl font-semibold text-gray-800">
        The portfolio model illustrates how AI capability types align with use cases,
        expected benefits, and maturity levels.
      </p>
    </section>
  </div>

</div>


      {/* eleventh div */}
      <div className="h-auto w-full grid gap-10 mt-15">
        {/* title */}
           <div className="w-full flex justify-center items-center">
          <section>
            <p className="text-5xl font-semibold text-[#008282]">Why C-Suites Must Act Now</p>
          </section>
        </div>
           {/* second text */}
           <div className="w-full flex justify-center items-center">
            <section className="w-213 text-center">
              <p className="font-medium">Without a combined operational + Cyber AI model, enterprise face:</p>
            </section>
           </div>
           {/* third text */}
           <div className="w-full flex justify-center items-center">
            <section className="w-213 grid place-content-center">
              <p><span>✗</span> Fragmented AI investment with limited ROI</p>
              <p><span>✗</span>Increased cyber vulnerability across automation and data flows</p>
              <p><span>✗</span>Governance gaps as AI expands decisions and access</p>
              <p><span>✗</span>Unmanaged risks in third-party AI and autonomous systems</p>
              <p><span>✗</span>workforce misalignment and capability shortfalls</p>
              <p><span>✗</span>Slow, reactive transformation compared to AI-native competitors</p>
            </section>
           </div>
           {/* fourth text */}
           <div className="w-full flex justify-center items-center">
            <section className="w-213 text-center">
              <p className="font-medium">With Modus ETP + ETI, they gain:</p>
            </section>
           </div>
           {/* fifth text */}
           <div className="w-full flex justify-center items-center">
            <section className="w-213 grid place-content-center">
              <p><span>✓</span>End-to-end visibility</p>
              <p><span>✓</span>A secure-by-design Operating Model</p>
              <p><span>✓</span>AN AI Portfolio built around business value</p>
              <p><span>✓</span>A simulation environment to test scenarious before investing</p>
              <p><span>✓</span>A clear, confident roadmap for enterprise-level AI transformation</p>
            </section>
           </div>
           </div>

           {/* twelth div video box */}
           <div className="w-full h-screen flex justify-center items-center mt-15">

  <section className="w-[1200px] h-[675px] flex justify-center items-center rounded-2xl overflow-hidden shadow-lg">

    {/* Executive Overview Video */}
    <iframe
      src="https://www.youtube.com/embed/JxGFz2xmBdg"
      title="Executive Overview: AI Operating Model & Cybersecurity Integration"
      className="w-full h-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>

  </section>

</div>


           {/* thirteenth div */}
           <div className="w-full h-auto grid gap-10 place-content-center">

  {/* Title */}
  <div className="w-full flex justify-center">
    <section>
      <p className="text-5xl font-semibold text-[#008282] text-center">
        Final Message to Business Leaders
      </p>
    </section>
  </div>

  {/* Subtitle */}
  <div className="w-full flex justify-center">
    <section className="w-[850px] text-center">
      <p className="text-lg font-medium italic text-gray-700">
        AI must not be deployed in isolation.
      </p>
    </section>
  </div>

  {/* Core Message */}
  <div className="w-full flex justify-center">
    <section className="w-[850px] text-center text-lg text-gray-800">
      <p>
        Operational AI reveals <b>where intelligence can create value</b>.
      </p>
      <p className="mt-2">
        Cybersecurity AI ensures that value remains <b>secure, compliant, and resilient</b>.
      </p>
    </section>
  </div>

  {/* Synthesis */}
  <div className="w-full flex justify-center">
    <section className="w-[850px] text-center text-lg text-gray-800">
      <p>
        Together, they form the foundation of tomorrow’s operating models—
        <b> intelligent, adaptive, and secure</b>.
      </p>
    </section>
  </div>

  {/* Closing */}
  <div className="w-full flex justify-center">
    <section className="w-[900px] text-center text-lg font-medium text-gray-800">
      <p>
        Modus enables organisations to design, simulate, and scale this future
        with clarity, confidence, and control.
      </p>
    </section>
  </div>

</div>

      {/* main div */}
      </div>
    </>
  );
}
                                                                                                                                              