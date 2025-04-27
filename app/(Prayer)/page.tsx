import PrayerCard from '@/components/PrayerCard'
import RecitationItem from '@/components/RecitationItem'
import { Accordion } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { notes, prayers, recitations } from '@/data/prayer'

export default function PrayerGuide() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-green-50 to-white'>
			<div className='container mx-auto px-4 py-8'>
				<header className='mb-8 text-center'>
					<h1 className='text-3xl font-bold text-green-800 mb-2'>
						🌿 BESH VAQT NAMOZ TO'LIQ TARTIBI
					</h1>
					<p className='text-green-600'>(arabcha o'qilishi bilan)</p>
				</header>

				<Tabs defaultValue='prayers' className='w-full'>
					<TabsList className='grid w-full grid-cols-2'>
						<TabsTrigger value='prayers'>Namoz Tartibi</TabsTrigger>
						<TabsTrigger value='recitations'>Suralar va Duolar</TabsTrigger>
					</TabsList>

					<TabsContent value='prayers' className='space-y-6 mt-6'>
						{prayers.map((prayer, idx) => (
							<PrayerCard key={idx} {...prayer} />
						))}
					</TabsContent>

					<TabsContent value='recitations' className='space-y-6 mt-6'>
						<Card>
							<CardHeader>
								<CardTitle className='text-green-800'>
									✨ Namozda o'qiladigan suralar va duo
								</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								<Accordion type='single' collapsible className='w-full'>
									{recitations.map((recitation, idx) => (
										<RecitationItem key={idx} {...recitation} />
									))}
								</Accordion>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className='text-green-800'>🔔 Eslatma</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='list-disc pl-5 space-y-2'>
									{notes.map((note, idx) => (
										<li key={idx}>{note}</li>
									))}
								</ul>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}
