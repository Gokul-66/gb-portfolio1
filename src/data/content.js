// Every claim on the site lives here. Each number must trace to a linked repo result or the resume.
const GITHUB = 'https://github.com/Gokul-66';
const LAB_REPO = `${GITHUB}/booking-integrity-lab`;

export const PROFILE = {
  name: 'Gokul Babu',
  role: 'Software Engineer',
  location: 'Kochi, India',
  headline: 'Backend systems that stay correct when things fail.',
  summary:
    'Software engineer with 3+ years building production applications with Node.js, TypeScript, Angular and cloud infrastructure. My public projects test concurrency and failure handling directly, and they publish the results.',
  email: 'gokulmr65@gmail.com',
  github: GITHUB,
  linkedin: 'https://www.linkedin.com/in/gokul-babu-870b11226/',
};

export const HERO_PROOF = [
  {
    label: 'Slots oversold, 20 customers racing for each of 200',
    value: '0 of 200',
    href: `${LAB_REPO}/blob/main/docs/bench-results.md`,
  },
  {
    label: 'Invariant violations across 35 process kills and a database crash',
    value: '0',
    href: `${LAB_REPO}/blob/main/docs/chaos-results.md`,
  },
  {
    label: 'p99 with 50 clients on one slot, after fixing a deadlock storm',
    value: '~100 s → 37 ms',
    href: `${LAB_REPO}/blob/main/docs/bench-results.md`,
  },
];

export const PROJECTS = [
  {
    id: 'booking-lab',
    title: 'Booking Integrity Lab',
    pitch: 'A booking backend, and a harness that tries to break it with process kills, database crashes and hostile webhook timing.',
    links: [
      { label: 'Code', href: LAB_REPO },
      { label: 'Design doc', href: `${LAB_REPO}/blob/main/docs/DESIGN.md` },
      { label: 'Chaos results', href: `${LAB_REPO}/blob/main/docs/chaos-results.md` },
      { label: 'Benchmark', href: `${LAB_REPO}/blob/main/docs/bench-results.md` },
    ],
    problem:
      "A customer's hold expires, and their payment arrives afterwards. Someone else may already have the slot. The system must end with no double-booking and no lost money, even if a process dies halfway through.",
    flow: ['Hold', 'Postgres constraint', 'Signed webhook', 'Confirm or refund', 'Outbox', 'Consumer'],
    decisions: [
      'A Postgres exclusion constraint decides availability, so application bugs can\'t double-book.',
      'I rejected check-then-insert after measuring it, and I rejected Redis locks because the database needs a guard either way.',
      'Late payments confirm if the slot is free and refund otherwise, using a savepoint so the refund still commits.',
      'A transactional outbox gives at-least-once delivery, with an idempotent consumer.',
      'A per-resource lock fixed a deadlock storm the benchmark exposed. It caps writes per resource, a trade-off I measured and documented.',
    ],
    evidence: [
      { label: 'Check-then-insert: slots oversold', value: '199 / 200' },
      { label: 'This design: slots oversold', value: '0 / 200' },
      { label: 'Chaos: invariant violations', value: '0' },
      { label: 'Chaos with constraint removed', value: 'Fails, as it should' },
      { label: 'One-slot contention, p99 before fix', value: '~100 s' },
      { label: 'One-slot contention, p99 after fix', value: '37 ms' },
      { label: 'Holds across 50 resources', value: '3,818 req/s' },
    ],
    evidenceNote:
      'One local run, with load, API and Postgres on the same 20-thread laptop. Use these for comparison, not as capacity figures. Reproduce with npm run chaos and npm run bench.',
    limits: [
      'Customer identity is a demo header, not real authentication.',
      'The payment provider is simulated, and refunds are recorded, not executed.',
      'One Postgres primary. Replica failover is untested.',
    ],
    stack: ['TypeScript', 'Node.js', 'Fastify', 'PostgreSQL'],
  },
  {
    id: 'ride-dispatch',
    title: 'Ride Dispatch',
    pitch: 'An asynchronous dispatch backend, tested against competing requests, redelivered jobs, worker crashes and Redis or MongoDB outages.',
    links: [
      { label: 'Code', href: `${GITHUB}/ride-hailing-project` },
      { label: 'Live demo', href: 'https://ride-hailing-project.vercel.app/' },
    ],
    problem:
      'Dispatch has to assign each ride to one available driver while jobs get redelivered and workers crash. Saving a ride and queueing its job can\'t be atomic across two systems.',
    flow: ['API', 'MongoDB + outbox', 'Relay', 'BullMQ', 'Worker', 'Atomic claim'],
    decisions: [
      'MongoDB is the only source of truth. Losing all Redis data loses no ride or assignment.',
      'Transactions and a unique index mean a driver can never hold two active rides.',
      'A transactional outbox means a saved ride can\'t lose its job, even with Redis down.',
      'A reconciler recovers rides with lost jobs and expires rides nobody can serve.',
    ],
    evidence: [
      { label: 'Automated tests passing', value: '76' },
      { label: 'Throughput', value: 'Not yet measured' },
    ],
    evidenceNote: 'Tests include real BullMQ integration and worker crash scenarios.',
    limits: [
      'Pickup and drop are free text, so matching ignores distance.',
      'No real login in the public demo.',
      'Notifications are simulated.',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'BullMQ', 'Redis', 'React'],
  },
  {
    id: 'resume-analyzer',
    title: 'Resume Analyzer',
    pitch: 'A web app that scores a PDF resume against a role and job description, using an LLM with validated, structured output.',
    links: [
      { label: 'Code', href: `${GITHUB}/resume-analyzer` },
      { label: 'Live demo', href: 'https://resume-analyzer-two-xi.vercel.app' },
    ],
    problem:
      'LLM calls cost money, and resumes are untrusted input. The app has to control who can spend quota, treat model output as unreliable, and protect personal data.',
    flow: ['pdf.js in browser', 'Firebase token', 'Express checks', 'Groq', 'Schema validation'],
    decisions: [
      'The PDF stays in the browser, and only extracted text is sent.',
      'The server builds the prompt, and access rules are enforced by the backend and tested Firestore rules.',
      'Every model response is validated against a schema before use.',
      'A shared per-user quota limits spend across instances.',
    ],
    evidence: [
      { label: 'Backend tests passing', value: '71' },
      { label: 'Frontend tests passing', value: '34' },
      { label: 'Scoring accuracy', value: 'Not yet measured' },
    ],
    evidenceNote: 'Scores come from an LLM and have not been checked against human reviewers.',
    limits: [
      'A crafted resume can still sway scores, so they shouldn\'t drive hiring decisions.',
      'Firebase App Check is not enabled.',
    ],
    stack: ['React', 'Node.js', 'Express', 'Firebase', 'Groq'],
  },
];

export const EXPERIENCE = [
  {
    company: 'InnerSpace Co-working',
    role: 'Software Engineer',
    period: 'Jun 2026 – Present',
    highlights: [
      'Designed a booking workflow using Redis and BullMQ to reserve assets, queue requests and coordinate payment and confirmation, reducing the risk of concurrent booking conflicts.',
      'Replaced always-on Node.js cron processes with GCP Cloud Scheduler triggering API endpoints.',
      'Integrated Razorpay, Zoho CRM, Zoho Invoice and Google Sign-In through Firebase Authentication.',
      'Deployed and maintained production applications on GCP App Engine.',
    ],
  },
  {
    company: 'ZeroNorth (formerly Alpha-Ori)',
    role: 'Software Engineer',
    period: 'Nov 2023 – Jun 2026',
    highlights: [
      'Built production features for SmartShip and SmartVoyager using Angular, TypeScript, Node.js and Express.',
      'Built an asynchronous XML generation pipeline processing thousands of derived tags with background jobs.',
      'Reduced critical workflow processing time by 40% by moving synchronous operations to a queue-based design.',
      'Reduced API response times from about 2 seconds to 150–300 ms using Redis caching.',
      'Received the Star Performer Award for delivery and technical ownership.',
    ],
  },
  {
    company: 'ZeroNorth (formerly Alpha-Ori)',
    role: 'Software Engineer Trainee',
    period: 'Apr 2023 – Nov 2023',
    highlights: [
      'Developed full-stack web applications using Angular, Node.js, Express and MongoDB.',
    ],
  },
];

export const SKILLS = [
  { name: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'SQL'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'Fastify', 'REST APIs', 'JWT authentication'] },
  { name: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Cassandra', 'Firestore'] },
  { name: 'Async systems', items: ['BullMQ', 'AWS SQS', 'Kafka', 'Transactional outbox'] },
  { name: 'Cloud', items: ['AWS S3, SQS, CloudWatch', 'GCP App Engine, Cloud Scheduler', 'Docker'] },
  { name: 'Frontend', items: ['Angular', 'React', 'RxJS', 'HTML', 'CSS'] },
];

// Kept verbatim for now. Replace with attributed quotes before relying on this section.
export const TESTIMONIALS = [
  {
    quote:
      'Gokul demonstrated exceptional backend rigor while designing our reservation workflows. His handling of concurrent asset holds with Redis TTLs eliminated double bookings entirely.',
    name: 'Engineering Lead',
    role: 'InnerSpace Co-working',
  },
  {
    quote:
      'His focus on latency profiling and cache-aside implementation brought our critical endpoint response times down by over 85%. He understands how to debug under load.',
    name: 'Senior Full-Stack Architect',
    role: 'Production Collaborator',
  },
  {
    quote:
      'Gokul does not just build features; he cares about system correctness, idempotency, and failure isolation. His asynchronous queue architectures are clean, resilient, and easy to maintain.',
    name: 'Technical Peer & Reviewer',
    role: 'Open-Source Collaborator',
  },
  {
    quote:
      'Fast turnaround, clean TypeScript and Node.js code, and thorough consideration of edge cases in worker retries and queue concurrency.',
    name: 'Frontend Lead',
    role: 'Project Collaborator',
  },
];
