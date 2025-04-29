
export const prayers = [
	{
		title: '1. BOMDOD NAMOZI',
		description: '2 rakat sunnat, 2 rakat farz',
		sunnatRakats: [
			{
				title: 'Sunnat (2 rakat)',
				niyat:
					"Alloh rizoligi uchun bomdod namozining ikki rakat sunnatini o'qishni niyat qildim.",
				steps: [
					"1-rakat: Subhanaka, Fotiha, kichik sura (Ixlos), ruku', sajda.",
					"2-rakat: Fotiha, kichik sura (Kavsar), ruku', sajda.",
					'Tashahhud, Salovat, Duo, Salom.',
				],
			},
		],
		farzRakats: [
			{
				title: 'Farz (2 rakat)',
				niyat:
					"Alloh rizoligi uchun bomdod namozining ikki rakat farzini o'qishni niyat qildim.",
				steps: [
					"1-rakat: Subhanaka, Fotiha, kichik sura (Ixlos), ruku', sajda.",
					"2-rakat: Fotiha, kichik sura (Kavsar), ruku', sajda.",
					'Tashahhud, Salovat, Duo, Salom.',
				],
			},
		],
	},
	{
		title: '2. PESHIN NAMOZI',
		description: '4 rakat sunnat, 4 rakat farz, 2 rakat sunnat',
		sunnatRakats: [
			{
				title: 'Sunnat (4 rakat)',
				steps: [
					"1-2 rakatlar: Subhanaka, Fotiha, kichik sura, ruku', sajda.",
					'2-rakatda Tashahhud.',
					"3-4 rakatlar: faqat Fotiha, ruku', sajda.",
					'4-rakatda Tashahhud, Salovat, Duo, Salom.',
				],
			},
			{
				title: 'Sunnat (2 rakat)',
				steps: [
					"1-rakat: Fotiha, kichik sura, ruku', sajda.",
					"2-rakat: Fotiha, kichik sura, ruku', sajda.",
					'Tashahhud, Salovat, Duo, Salom.',
				],
			},
		],
		farzRakats: [
			{
				title: 'Farz (4 rakat)',
				steps: [
					"1-2 rakatlar: Subhanaka, Fotiha, kichik sura, ruku', sajda.",
					'2-rakatda Tashahhud.',
					"3-4 rakatlar: faqat Fotiha, ruku', sajda.",
					'4-rakatda Tashahhud, Salovat, Duo, Salom.',
				],
			},
		],
	},
	{
		title: '3. ASR NAMOZI',
		description: '4 rakat farz',
		farzRakats: [
			{
				title: 'Farz (4 rakat)',
				steps: [
					"1-2 rakatlar: Subhanaka, Fotiha, kichik sura, ruku', sajda.",
					'2-rakatda Tashahhud.',
					"3-4 rakatlar: faqat Fotiha, ruku', sajda.",
					'4-rakatda Tashahhud, Salovat, Duo, Salom.',
				],
			},
		],
	},
	{
		title: '4. SHOM NAMOZI',
		description: '3 rakat farz, 2 rakat sunnat',
		farzRakats: [
			{
				title: 'Farz (3 rakat)',
				steps: [
					"1-rakat: Subhanaka, Fotiha, kichik sura, ruku', sajda.",
					"2-rakat: Fotiha, kichik sura, ruku', sajda, Tashahhud.",
					"3-rakat: Fotiha, kichik sura, ruku', sajda.",
					'Tashahhud, Salovat, Duo, Salom.',
				],
			},
		],
		sunnatRakats: [
			{
				title: 'Sunnat (2 rakat)',
				steps: [
					"1-rakat: Fotiha, kichik sura, ruku', sajda.",
					"2-rakat: Fotiha, kichik sura, ruku', sajda.",
					'Tashahhud, Salovat, Duo, Salom.',
				],
			},
		],
	},
	{
		title: '5. XUFTON NAMOZI',
		description: '4 rakat farz, 2 rakat sunnat',
		farzRakats: [
			{
				title: 'Farz (4 rakat)',
				steps: [
					"1-2 rakatlar: Subhanaka, Fotiha, kichik sura, ruku', sajda.",
					'2-rakatda Tashahhud.',
					"3-4 rakatlar: faqat Fotiha, ruku', sajda.",
					'4-rakatda Tashahhud, Salovat, Duo, Salom.',
				],
			},
		],
		sunnatRakats: [
			{
				title: 'Sunnat (2 rakat)',
				steps: [
					"1-rakat: Fotiha, kichik sura, ruku', sajda.",
					"2-rakat: Fotiha, kichik sura, ruku', sajda.",
					'Tashahhud, Salovat, Duo, Salom.',
				],
			},
		],
	},
]

export const recitations = [
	{
		title: 'Subhanaka',
		content:
			"Subhanakallohumma va bihamdik, va tabarokasmuk, va ta'ala jadduk, va la ilaha g'oyruk.",
	},
	{
		title: 'Fotiha surasi',
		content: `Bismillahir rohmanir rohim.
1. Alhamdulillahi robbil 'aalamiyn 
2. Ar-rohmaanir rohiym 
3. Maaliki yavmiddiyn 
4. Iyyaaka na'budu va iyyaaka nasta'iyn. 
5. Ihdinas-sirootol mustaqiym 
6-7. Sirootol-laziyna an'amta 'alayhim g‘oyril mag‘zuubi 'alayhim valazzolliyn. Omin.`,
	},
	{
		title: 'Ixlos surasi',
		content: `Qul huvallohu ahad.
Allohu somad.
Lam yalid va lam yulad.
Va lam yakun lahu kufuvan ahad.`,
	},
	{
		title: 'Kavsar surasi',
		content: `Inna a'taynaka-l-kawthar.
Fasalli li-robbika vanhar.
Inna shani'aka huval-abtar.`,
	},
	{
		title: 'Attahiyyat (Tashahhud)',
		content: `Attahiyyatu lillahi vassalavatu vattoyyibat.
Assalamu 'alayka ayyuhan-nabiyyu va rohmatullahi va barokatuh.
Assalamu 'alayna va 'ala ibadillahissolihin.
Ashhadu alla ilaha illallohu va ashhadu anna Muhammadan abduhu va rosuluh.`,
	},
	{
		title: 'Salovat',
		content: `Allohumma solli 'ala Muhammadin va 'ala ali Muhammadin.
Kama sollayta 'ala Ibrohima va 'ala ali Ibrohim.
Innaka hamidum majid.
Allohumma barik 'ala Muhammadin va 'ala ali Muhammadin.
Kama barokta 'ala Ibrohima va 'ala ali Ibrohim.
Innaka hamidum majid.`,
	},
	{
		title: 'Duo',
		content:
			"Robbana atina fid-dunya hasanatan, va fil-akhirati hasanatan, va qina 'azaban-nar.",
	},
	{
		title: 'Salom',
		content: "Assalamu 'alaykum va rohmatulloh.",
	},
]

export const notes = [
	"Har bir sajdada Subhana robbiyal a'la 3 marta.",
	"Har bir ruku'da Subhana robbiyal 'azim 3 marta.",
	"Fotiha surasidan keyin kichik sura o'qish sunnat.",
	"Har salom berishda: Assalamu 'alaykum va rohmatulloh.",
]
