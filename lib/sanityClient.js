import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "djebdgve",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skWkwhzbuhYTzWdbtmRFawm8EN0T4RlJiqv4gwwFZDPmKLvFsoL5hDXb9FHHrOTAsMBP3CAUd6gEMeimhsgMd2TRcQhdeFIPMo2MNjewcwzFwvwK0LFCJO1tmYmrtBHhiWKB6u0cWSWG9FMVeN6SGF1jnsXBWMWePRWywAtpLe2igorjMufD",
  useCdn: false,
});
