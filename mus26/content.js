// ============================================================
// CONTENT.JS — Edit all text here. Touch nothing else.
// ============================================================
// Every word on the website lives in this file.
// Change the text between the quote marks, save the file,
// and refresh your browser. That's it.
//
// RULES:
//   • Keep your edits inside the quote marks
//   • Apostrophes and regular quote marks are fine as-is
//   • For paragraph breaks, each string in an array like
//     ["Para 1", "Para 2"] becomes its own paragraph
//   • Don't add or remove lines with colons — only change
//     what comes after the colon
// ============================================================

const CONTENT = {

  // ── GLOSSARY ────────────────────────────────────────────────
  // Define terms here. In any body text, wrap a word or phrase in
  // {{double curly braces}} to make it a hover tooltip that looks
  // up this definition automatically.
  //
  // To use a one-off definition instead: {{term|Your note here}}
  //
  // Terms are case-sensitive — write them exactly as they appear in the text.
  glossary: {
    "de jure":               "Latin: 'by law.' Describes rights or status that exist on paper — formal, legal recognition regardless of lived experience.",
    "de facto":              "Latin: 'in fact.' Describes conditions that exist in practice, regardless of what the law says.",
    "de jure citizenship":   "Legal membership in a nation — formal rights granted by law. Takaki uses this to name the gap between what the Constitution promises and what marginalized communities actually experience.",
    "de facto citizenship":  "Full belonging in practice — economic participation, cultural recognition, social inclusion. The thing marginalized communities built through cultural labor while being denied legal protections.",
    "de jure/de facto gap":  "Takaki's framework for the distance between legal citizenship and lived citizenship in U.S. history — the rights people are owed versus the rights they actually receive.",
    "Takaki":                "Ronald Takaki (1939–2009), historian and UC Berkeley professor. His book A Different Mirror argues that American history must be told from the perspectives of its many peoples, not just the dominant white narrative.",
    "house music":           "A genre of electronic dance music born in Black and Latino gay clubs in Chicago in the early 1980s — particularly the Warehouse, where Frankie Knuckles was resident DJ. The name comes from that club.",
    "techno":                "Electronic dance music developed in Detroit in the mid-1980s by Black artists including Juan Atkins, Derrick May, and Kevin Saunderson (the Belleville Three). Influenced by Afrofuturism and industrial decay.",
    "powwow":                "A gathering of Indigenous peoples for ceremony, celebration, and community. Powwow traditions include drumming, singing, and dance that carry deep spiritual and cultural significance across many nations.",
    "Powwow Step":           "A genre coined by A Tribe Called Red (now The Halluci Nation) blending traditional powwow drumming and song with contemporary electronic production — a living synthesis, not a museum piece.",
    "risograph":             "A stencil duplicator that produces prints with grainy texture and slight color misregistration between layers. Popular in zine and alternative print culture for its handmade, imperfect aesthetic.",
    "CALLI":                 "A Bay Area collective centered on Latin American and Indigenous creative communities in Oakland. Co-presenting the afterparty keeps revenue and programming authority within the communities the concert is about.",
    "The Omni":              "A collectively operated all-ages venue in North Oakland, open since 2014. Home for underground music, radical politics, and community organizing.",
    "Fort Mason":            "A former U.S. Army post on the San Francisco waterfront, now a nonprofit arts campus. Its history as a site of military power — and the displacement that implies — is part of why it's a productive venue for this argument.",
    "Boiler Room":           "A global music broadcasting platform known for intimate live DJ sets filmed in underground venues. Many foundational electronic music performances exist only as Boiler Room recordings.",
    "Afrofuturism":          "A cultural and artistic movement that centers Black imagination, technology, and futures — rejecting narratives that place Black people only in the past or present of struggle.",
  },

  // ── NAVIGATION ──────────────────────────────────────────────
  nav: {
    links: [
      { label: "Theme",      href: "#theme"        },
      { label: "Audience",   href: "#audience"     },
      { label: "Venue",      href: "#venue"        },
      { label: "Artists",    href: "#artists"      },
      { label: "Event",      href: "#event-design" },
      { label: "Challenges", href: "#challenges"   },
      { label: "Publicity",  href: "#publicity"    },
    ],
  },

  // ── HERO ────────────────────────────────────────────────────
  hero: {
    eyebrow:  "Issues in American Music — Concert Proposal",
    title:    "The Promised Land",
    subtitle: "Can You Feel It?",
    tagline:  "A one-day festival and afterparty reclaiming the origins of American electronic music",
    details: [
      { label: "Course",   value: "MUSIC 26AC — Music and Social Justice in America, UC Berkeley" },
      { label: "Venue",    value: "Fort Mason Center, San Francisco + The Omni, North Oakland" },
      { label: "Proposed", value: "Spring 2027" },
    ],
    scrollCue: "Scroll to read the proposal",
  },

  // ── THEME & GOALS ───────────────────────────────────────────
  theme: {
    sectionLabel: "01 — Theme & Goals",
    heading:    "A Citizenship Gap in Sound",
    subheading: "The de jure and de facto of American electronic music",
    body: [
      "{{Takaki}}'s framework distinguishes between {{de jure citizenship}} — legal membership in a nation — and {{de facto citizenship}} — the lived experience of belonging, recognition, and reward. This concert applies that lens to culture: Black, Latinx, and Indigenous communities earned de facto cultural citizenship by originating the sonic vocabulary of American electronic music. {{house music|A genre born in Black and Latino gay clubs on Chicago's South Side in the early 1980s.}}, {{techno}}, and the club cultures of the South Side, the Bronx, and beyond were built by queer people of color who had few other stages.",
      "Yet the mainstream music industry enacted its own {{de jure/de facto gap}}: as electronic music crossed into commercial and critical mainstream spaces, the originators were systematically displaced from recognition, ownership, and economic reward. What remained — the aesthetic, the groove, the feeling — was de-racinated, de-queered, and re-sold.",
      "The Promised Land: Can You Feel It? takes its double title from two strands of American mythology. The Promised Land names the civic ideal — full belonging always deferred. 'Can You Feel It' is encoded in the DNA of house music, from early Chicago tracks to Larry Heard's 1986 classic, a question that was never rhetorical. The concert enacts its argument: rather than narrating displacement, it centers the originators, their descendants, and their living communities as the present tense of this music.",
    ],
    goals: {
      heading: "Concert Goals",
      items: [
        "Make the historical argument visceral and embodied — audiences experience the displacement and the recovery, not just hear about it.",
        "Center artists with direct genealogical and communal ties to the communities that built American electronic music.",
        "Partner with Bay Area organizations whose own work mirrors this cultural reclamation project.",
        "Generate educational programming that connects the concert to course themes and extends its reach into classrooms.",
        "Model an event economy that keeps revenue within the communities being celebrated.",
      ],
    },
  },

  // ── AUDIENCE ────────────────────────────────────────────────
  audience: {
    sectionLabel: "02 — Audience",
    heading: "Who This Concert Is For",
    body: [
      "Primary: UC Berkeley students — especially those in ethnic studies, American studies, and music — who encounter Takaki's framework and the history of American popular music as separate subjects. This concert makes the connection physical.",
      "Secondary: Bay Area music communities, particularly audiences of color who already inhabit these scenes but rarely see their history named in academic or mainstream cultural contexts. The afterparty at The Omni, programmed with CALLI collective, is designed specifically to reach this audience on their own ground.",
      "Tertiary: General San Francisco and Oakland concertgoers drawn to culturally substantive festival experiences — the day format at Fort Mason is accessible in price, time, and geography to a broad public audience.",
    ],
    note: "The two-venue, day-into-night structure is not logistical convenience. It is argument. Fort Mason reaches the first audience; The Omni reaches the second; the throughline between them is the concert's thesis made spatial.",
  },

  // ── VENUE ───────────────────────────────────────────────────
  venue: {
    sectionLabel: "03 — Venue",
    heading: "The Space Makes the Case",
    locations: [
      {
        name:        "Fort Mason Center for Arts & Culture",
        role:        "Day Festival — Main Stage",
        city:        "San Francisco, CA",
        // Drop your venue photo in the images/ folder and put the filename here.
        // Set to null if you don't have one yet — the banner still works without it.
        bannerImage: "images/fort-mason.jpg",
        description: "A former military post turned nonprofit arts campus on the San Francisco waterfront, Fort Mason is one of the Bay Area's most versatile festival sites. Its Great Meadow and indoor event spaces accommodate large crowds in a setting that carries its own complicated history — a site of American militarism reanimated as a space of public culture. That tension is useful.",
        capacity:    "Up to 10,000 (outdoor Great Meadow); 1,000–2,500 (indoor pavilions)",
        logistics:   "Outdoor main stage with adjacent indoor electronic stage. ADA accessible. Strong public transit access from downtown SF.",
      },
      {
        name:        "The Omni",
        role:        "Afterparty — with CALLI Collective",
        city:        "North Oakland, CA",
        bannerImage: "images/the-omni.jpg",
        description: "A collectively operated all-ages venue in North Oakland, The Omni has been a home for underground music, radical politics, and community organizing since 2014. Programming with CALLI — a collective centered on Latin American and Indigenous creative communities in the Bay Area — grounds the afterparty in exactly the kind of living, present-tense community the concert is about. This is not a nostalgia event.",
        capacity:    "~350",
        logistics:   "All-ages. BART accessible (19th St Oakland). Sliding-scale door. CALLI collective co-presents and takes a share of door revenue.",
      },
    ],
  },

  // ── ARTISTS ─────────────────────────────────────────────────
  artists: {
    sectionLabel: "04 — Artists",
    heading: "The Lineup as Argument",
    intro:   "Each artist was chosen because their biography is the argument. Together, they represent the three communities — Black, Indigenous, Latinx — whose labor built American electronic music, and the three identities — race, ethnicity, queerness — the mainstream most aggressively displaced from it.",
    list: [
      {
        name:     "The Halluci Nation",
        formerly: "formerly A Tribe Called Red",
        origin:   "Ottawa, ON (Anishinaabe and Mohawk nations)",
        slot:     "Day Festival — Opening Set",
        genre:    "Indigenous Electronic / Powwow Step",
        body: [
          "The Halluci Nation blend digital powwow drumming, traditional song, and contemporary electronic production into something that is neither folk preservation nor genre novelty — it is a living synthesis that refuses the false choice between tradition and modernity that settler culture has always tried to impose on Indigenous peoples.",
          "Their presence opens the concert's argument at its most fundamental level: the land itself. Before house, before techno, before any American music, there was Indigenous music on this continent. The Halluci Nation do not perform that history; they embody its continuation.",
          "Their work has consistently named and resisted the appropriation of Indigenous imagery in mainstream culture, making them not just musically but politically legible within the concert's framing.",
        ],
        relevance: "Represents Indigenous cultural citizenship — the most legally and socially denied form in U.S. history — and the argument that electronic music's communal, ritual function predates its American commercial history.",

        venueIndex: 0,  // 0 = Fort Mason  |  1 = The Omni

        // ── MEDIA (all optional — set any field to null to hide it) ─────
        // Create an images/ folder next to index.html and drop your files in.
        image:   "images/halluci-nation.jpg",
        gallery: [
          "images/halluci-nation-2.jpg",
          "images/halluci-nation-3.jpg",
        ],
        links: [
          { label: "Website",   url: "https://thehallucinationation.com" },
          { label: "Bandcamp",  url: "https://thehallucinationation.bandcamp.com" },
        ],
        // Paste any normal YouTube URL — it converts to an embed automatically.
        // For SoundCloud or Mixcloud, paste their embed URL from Share › Embed.
        featuredSet: {
          url:   null,
          title: "Paste a YouTube, SoundCloud, or Mixcloud URL above",
        },
      },
      {
        name:     "The Martinez Brothers",
        formerly: null,
        origin:   "South Bronx, New York (Puerto Rican)",
        slot:     "Day Festival — Headlining Set",
        genre:    "Deep House / Techno",
        body: [
          "Chris and Steve Martinez grew up in the South Bronx attending underground dance parties with their father, absorbing a house music culture that was inseparable from Latino community life in New York. They did not discover this music — they were born into it.",
          "Now among the most sought-after DJs in the world, the brothers have remained rooted in the Afro-diasporic and Latino traditions that shaped them, consistently programming sets that honor the deep history of the music while pushing it forward.",
          "Their story embodies the de jure/de facto gap precisely: Latino communities were foundational to New York's dance music culture but largely written out of the canonical histories that credit only the Chicago and Detroit scenes.",
        ],
        relevance: "Represents Latinx cultural citizenship in electronic music and the erasure of the New York Latino dance community from official genre histories.",

        venueIndex: 0,

        image:   "images/martinez-brothers.jpg",
        gallery: [
          "images/martinez-brothers-2.jpg",
          "images/martinez-brothers-3.jpg",
        ],
        links: [
          { label: "Website",    url: "https://www.themartinezbrothers.com" },
          { label: "SoundCloud", url: "https://soundcloud.com/themartinezbrothers" },
        ],
        featuredSet: {
          url:   null,
          title: "Paste a YouTube, SoundCloud, or Mixcloud URL above",
        },
      },
      {
        name:     "Honey Dijon",
        formerly: null,
        origin:   "Chicago, IL",
        slot:     "Afterparty Headline — The Omni",
        genre:    "House / Electronic",
        body: [
          "Honey Dijon grew up Black and queer in Chicago during the years when house music was being invented in the city's South Side Black gay clubs — the Warehouse, the Music Box, the Power Plant. She did not encounter house music as a genre; she encountered it as a community, as survival, as a place to be herself in a world that refused her identity at every other turn.",
          "Her career as a DJ, producer, and fashion figure has been built on the insistence that house music's Blackness and queerness are not incidental — they are its essential conditions. To strip them out is not to preserve the music; it is to end it.",
          "Booking Honey Dijon for the afterparty at The Omni is a deliberate inversion of the displacement the concert describes: the originating community, in an intimate venue, on their own terms.",
        ],
        relevance: "Represents the Black and queer origins of Chicago house — the community most responsible for creating American electronic music and most violently displaced from its mainstream recognition.",

        venueIndex: 1,  // The Omni

        image:   "images/honey-dijon.jpg",
        gallery: [
          "images/honey-dijon-2.jpg",
          "images/honey-dijon-3.jpg",
        ],
        links: [
          { label: "Website",    url: "https://www.honeydijon.com" },
          { label: "SoundCloud", url: "https://soundcloud.com/honeydijon" },
        ],
        featuredSet: {
          url:   null,
          title: "Paste a YouTube, SoundCloud, or Mixcloud URL above",
        },
      },
    ],
  },

  // ── EVENT DESIGN ────────────────────────────────────────────
  eventDesign: {
    sectionLabel: "05 — Event Design",
    heading: "The Concert as Pedagogy",
    body: [
      "The event is structured so that the argument is experienced before it is explained. There are no lecture segments, no panels interrupting the music. Instead, the design works through sequence, space, and juxtaposition.",
      "The day festival at Fort Mason moves from opening to close in a rough chronological arc — Indigenous music's deep time, the Latinx dance communities of New York, the afternoon's broader public audience — arriving at evening with a set that bridges the day into night. The transition to The Omni is not a second event; it is the third act.",
      "At each venue, printed programs contain one page of historical context per artist — accessible, not academic — written in a voice that treats the audience as curious rather than ignorant. QR codes link to a companion playlist and a short reading list drawn from course materials.",
    ],
    elements: [
      {
        name:        "Printed Programs",
        description: "Single-sheet, foldable programs with artist histories and a QR code linking to companion materials. Designed to be kept, not discarded.",
      },
      {
        name:        "Companion Playlist",
        description: "A curated listening guide available before and after the event, organized by the concert's historical argument — not just the artists performing.",
      },
      {
        name:        "Community Tables",
        description: "Tabling space at Fort Mason for Bay Area organizations doing related cultural and political work — CALLI collective, Indigenous rights organizations, local music education nonprofits.",
      },
      {
        name:        "Educational Tie-In",
        description: "A post-concert discussion section available to MUSIC 26AC and affiliated courses, structured around the concert experience as primary text.",
      },
    ],
  },

  // ── CHALLENGES ──────────────────────────────────────────────
  challenges: {
    sectionLabel: "06 — Challenges",
    heading: "What Could Go Wrong",
    intro:   "Honest accounting of the obstacles this proposal would need to navigate.",
    items: [
      {
        challenge: "Artist fees and budget",
        response:  "The Martinez Brothers and Honey Dijon command significant fees at this stage of their careers. Realistic budgeting would require foundation support (Zellerbach Family Foundation, Kenneth Rainin Foundation), UC Berkeley programming funds, and a tiered ticketing model (free/low-cost at Fort Mason, sliding scale at The Omni). A stripped-down version with emerging artists in each tradition is viable if headliner fees are prohibitive.",
      },
      {
        challenge: "Risk of tokenism",
        response:  "A concert that claims to center marginalized communities while treating artists as representatives of their identity rather than as musicians is worse than no concert at all. The solution is curatorial restraint: let the music be the argument, and resist the temptation to over-explain. The printed program exists to provide context, not to caption the artists.",
      },
      {
        challenge: "Audience fragmentation",
        response:  "The day/night structure risks creating two separate events with different audiences that never encounter each other. Deliberate transit programming — shuttle between venues, coordinated end times, shared ticketing — mitigates this. So does designing the transition as a felt moment rather than a logistical handoff.",
      },
      {
        challenge: "Fort Mason permit complexity",
        response:  "Large outdoor events at Fort Mason require significant lead time and coordination with the National Park Service. This proposal assumes 12–18 months of planning time and experienced production partners.",
      },
      {
        challenge: "Gentrification optics",
        response:  "Holding the 'accessible' event in San Francisco and the 'community' event in Oakland risks reproducing the geography of displacement the concert argues against. This tension cannot be fully resolved but can be named — in the program, in the publicity, in the framing — so that the concert is honest about its own position.",
      },
    ],
  },

  // ── PUBLICITY ───────────────────────────────────────────────
  publicity: {
    sectionLabel: "07 — Publicity",
    heading: "How the Word Gets Out",
    body: [
      "Publicity strategy follows the audience segmentation: different messages, different channels, same event.",
      "For the UC Berkeley and academic audience: course listservs, campus arts programming, partnerships with ASUC and the Department of Music. A companion essay — drawing on course readings — published in the Daily Cal or Sather Gate zine culture before the event.",
      "For the Bay Area music and cultural community: promotion through existing networks — KPFA, KQED Arts, local music blogs (48 Hills, Afropunk Bay Area), Instagram presence rooted in the visual language of the music scenes being represented rather than generic festival design.",
      "For general audiences: Fort Mason's own promotional infrastructure, earned media through the event's conceptual hook, and word of mouth within the artist communities.",
    ],
    principles: [
      "Publicity materials are designed by someone from the communities the concert centers — not outsourced to a generic festival design shop.",
      "The visual language draws on the actual history: Chicago club flyers from the 1980s, powwow regalia aesthetics, South Bronx party culture — cited and transformed, not merely appropriated.",
      "Advance press targets critics and journalists who already cover these communities, not just music generalists.",
    ],
  },

  // ── INTERSTITIAL QUOTES ─────────────────────────────────────
  // These appear as full-screen black panels between sections.
  // Swap in any quotes you like — just change the text and attribution.
  // The panels appear: (1) between Hero and Theme, (2) between Artists and Event Design.
  quotes: [
    {
      text:        "House music is like church to the people who understand it. It came out of the most marginalized communities — and that is not a detail. That is the whole story.",
      attribution: "Frankie Knuckles",
    },
    {
      text:        "We didn't set out to make a genre. We set out to make a room full of people feel like they were home.",
      attribution: "The Martinez Brothers",
    },
  ],

  // ── COMPANION PLAYLIST ──────────────────────────────────────
  // A floating music player follows the user as they scroll.
  //
  // HOW TO SET UP:
  //   1. Create a playlist on SoundCloud (soundcloud.com)
  //   2. Add all the tracks you want
  //   3. Open the playlist page and copy the URL from your browser
  //   4. Paste it below as soundcloudUrl
  //
  // The player will automatically load all tracks, show titles,
  // and give the user prev / play / next controls.
  playlist: {
    label:          "Companion Playlist",
    soundcloudUrl:  null,  // ← paste your SoundCloud playlist URL here
  },

  // ── FOOTER ──────────────────────────────────────────────────
  footer: {
    course:     "MUSIC 26AC — Music and Social Justice in America",
    university: "University of California, Berkeley",
    year:       "2026",
    note:       "This is an academic proposal prepared as a course assignment. No artists have been contacted or booked.",
  },

};
