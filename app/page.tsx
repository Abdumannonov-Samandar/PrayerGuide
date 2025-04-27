import PrayerCard from '@/components/PrayerCard'
import RecitationItem from '@/components/RecitationItem'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PrayerGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-green-800 mb-2">🌿 BESH VAQT NAMOZ TO'LIQ TARTIBI</h1>
          <p className="text-green-600">(arabcha o'qilishi bilan)</p>
        </header>

        <Tabs defaultValue="prayers" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="prayers">Namoz Tartibi</TabsTrigger>
            <TabsTrigger value="recitations">Suralar va Duolar</TabsTrigger>
          </TabsList>

          <TabsContent value="prayers" className="space-y-6 mt-6">
            <PrayerCard
              title="1. BOMDOD NAMOZI"
              description="2 rakat sunnat, 2 rakat farz"
              sunnatRakats={[
                {
                  title: "Sunnat (2 rakat)",
                  niyat: "Alloh rizoligi uchun bomdod namozining ikki rakat sunnatini o'qishni niyat qildim.",
                  steps: [
                    "1-rakat: Subhanaka, Fotiha, kichik sura (Ixlos), ruku', sajda.",
                    "2-rakat: Fotiha, kichik sura (Kavsar), ruku', sajda.",
                    "Tashahhud, Salovat, Duo, Salom.",
                  ],
                },
              ]}
              farzRakats={[
                {
                  title: "Farz (2 rakat)",
                  niyat: "Alloh rizoligi uchun bomdod namozining ikki rakat farzini o'qishni niyat qildim.",
                  steps: [
                    "1-rakat: Subhanaka, Fotiha, kichik sura (Ixlos), ruku', sajda.",
                    "2-rakat: Fotiha, kichik sura (Kavsar), ruku', sajda.",
                    "Tashahhud, Salovat, Duo, Salom.",
                  ],
                },
              ]}
            />

            <PrayerCard
              title="2. PESHIN NAMOZI"
              description="4 rakat sunnat, 4 rakat farz, 2 rakat sunnat"
              sunnatRakats={[
                {
                  title: "Sunnat (4 rakat)",
                  steps: [
                    "1-2 rakatlar: Subhanaka, Fotiha, kichik sura, ruku', sajda.",
                    "2-rakatda Tashahhud.",
                    "3-4 rakatlar: faqat Fotiha, ruku', sajda.",
                    "4-rakatda Tashahhud, Salovat, Duo, Salom.",
                  ],
                },
                {
                  title: "Sunnat (2 rakat)",
                  steps: [
                    "1-rakat: Fotiha, kichik sura, ruku', sajda.",
                    "2-rakat: Fotiha, kichik sura, ruku', sajda.",
                    "Tashahhud, Salovat, Duo, Salom.",
                  ],
                },
              ]}
              farzRakats={[
                {
                  title: "Farz (4 rakat)",
                  steps: [
                    "1-2 rakatlar: Subhanaka, Fotiha, kichik sura, ruku', sajda.",
                    "2-rakatda Tashahhud.",
                    "3-4 rakatlar: faqat Fotiha, ruku', sajda.",
                    "4-rakatda Tashahhud, Salovat, Duo, Salom.",
                  ],
                },
              ]}
            />

            <PrayerCard
              title="3. ASR NAMOZI"
              description="4 rakat farz"
              farzRakats={[
                {
                  title: "Farz (4 rakat)",
                  steps: [
                    "1-2 rakatlar: Subhanaka, Fotiha, kichik sura, ruku', sajda.",
                    "2-rakatda Tashahhud.",
                    "3-4 rakatlar: faqat Fotiha, ruku', sajda.",
                    "4-rakatda Tashahhud, Salovat, Duo, Salom.",
                  ],
                },
              ]}
            />

            <PrayerCard
              title="4. SHOM NAMOZI"
              description="3 rakat farz, 2 rakat sunnat"
              farzRakats={[
                {
                  title: "Farz (3 rakat)",
                  steps: [
                    "1-rakat: Subhanaka, Fotiha, kichik sura, ruku', sajda.",
                    "2-rakat: Fotiha, kichik sura, ruku', sajda, Tashahhud.",
                    "3-rakat: Fotiha, kichik sura, ruku', sajda.",
                    "Tashahhud, Salovat, Duo, Salom.",
                  ],
                },
              ]}
              sunnatRakats={[
                {
                  title: "Sunnat (2 rakat)",
                  steps: [
                    "1-rakat: Fotiha, kichik sura, ruku', sajda.",
                    "2-rakat: Fotiha, kichik sura, ruku', sajda.",
                    "Tashahhud, Salovat, Duo, Salom.",
                  ],
                },
              ]}
            />

            <PrayerCard
              title="5. XUFTON NAMOZI"
              description="4 rakat farz, 2 rakat sunnat"
              farzRakats={[
                {
                  title: "Farz (4 rakat)",
                  steps: [
                    "1-2 rakatlar: Subhanaka, Fotiha, kichik sura, ruku', sajda.",
                    "2-rakatda Tashahhud.",
                    "3-4 rakatlar: faqat Fotiha, ruku', sajda.",
                    "4-rakatda Tashahhud, Salovat, Duo, Salom.",
                  ],
                },
              ]}
              sunnatRakats={[
                {
                  title: "Sunnat (2 rakat)",
                  steps: [
                    "1-rakat: Fotiha, kichik sura, ruku', sajda.",
                    "2-rakat: Fotiha, kichik sura, ruku', sajda.",
                    "Tashahhud, Salovat, Duo, Salom.",
                  ],
                },
              ]}
            />
          </TabsContent>

          <TabsContent value="recitations" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">✨ Namozda o'qiladigan suralar va duo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <RecitationItem
                    title="Subhanaka"
                    content="Subhanakallohumma va bihamdik, va tabarokasmuk, va ta'ala jadduk, va la ilaha g'oyruk."
                  />

                  <RecitationItem
                    title="Fotiha surasi"
                    content={`Bismillahir rohmanir rohim.
Alhamdu lillahi robbil 'alamin.
Ar rohmanir rohim.
Maliki yawmid din.
Iyyaka na'budu va iyyaka nasta'in.
Ihdinas siratal mustaqim.
Siratal-lazina an'amta alayhim, g'oyril mag'zubi alayhim valazzollin. Omin.`}
                  />

                  <RecitationItem
                    title="Ixlos surasi"
                    content={`Qul huvallohu ahad.
Allohu somad.
Lam yalid va lam yulad.
Va lam yakun lahu kufuvan ahad.`}
                  />

                  <RecitationItem
                    title="Kavsar surasi"
                    content={`Inna a'taynaka-l-kawthar.
Fasalli li-robbika vanhar.
Inna shani'aka huval-abtar.`}
                  />

                  <RecitationItem
                    title="Attahiyyat (Tashahhud)"
                    content={`Attahiyyatu lillahi vassalavatu vattoyyibat.
Assalamu 'alayka ayyuhan-nabiyyu va rohmatullahi va barokatuh.
Assalamu 'alayna va 'ala ibadillahissolihin.
Ashhadu alla ilaha illallohu va ashhadu anna Muhammadan abduhu va rosuluh.`}
                  />

                  <RecitationItem
                    title="Salovat"
                    content={`Allohumma solli 'ala Muhammadin va 'ala ali Muhammadin.
Kama sollayta 'ala Ibrohima va 'ala ali Ibrohim.
Innaka hamidum majid.
Allohumma barik 'ala Muhammadin va 'ala ali Muhammadin.
Kama barokta 'ala Ibrohima va 'ala ali Ibrohim.
Innaka hamidum majid.`}
                  />

                  <RecitationItem
                    title="Duo"
                    content="Robbana atina fid-dunya hasanatan, va fil-akhirati hasanatan, va qina 'azaban-nar."
                  />

                  <RecitationItem title="Salom" content="Assalamu 'alaykum va rohmatulloh." />
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">🔔 Eslatma</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Har bir sajdada <span className="font-semibold">Subhana robbiyal a'la</span> 3 marta.
                  </li>
                  <li>
                    Har bir ruku'da <span className="font-semibold">Subhana robbiyal 'azim</span> 3 marta.
                  </li>
                  <li>Fotiha surasidan keyin kichik sura o'qish sunnat.</li>
                  <li>
                    Har salom berishda: <span className="font-semibold">Assalamu 'alaykum va rohmatulloh.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}




