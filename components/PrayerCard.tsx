
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

interface Rakat {
	title: string
	niyat?: string
	steps: string[]
}

interface PrayerCardProps {
	title: string
	description: string
	sunnatRakats?: Rakat[]
	farzRakats?: Rakat[]
}

export default function PrayerCard({ title, description, sunnatRakats = [], farzRakats = [] } : PrayerCardProps) {
  return (
	<Card className="border-green-100 shadow-sm">
	  <CardHeader className="bg-green-50 rounded-t-lg">
		<CardTitle className="text-green-800">{title}</CardTitle>
		<CardDescription>{description}</CardDescription>
	  </CardHeader>
	  <CardContent className="pt-6">
		<div className="space-y-4">
		  {farzRakats.map((rakat, index) => (
			<div key={`farz-${index}`} className="space-y-2">
			  <h3 className="font-semibold text-green-700">{rakat.title}</h3>
			  {rakat.niyat && (
				<div className="pl-4 border-l-2 border-green-200 mb-2">
				  <p className="italic text-green-700">Niyat: "{rakat.niyat}"</p>
				</div>
			  )}
			  <ul className="list-disc pl-5 space-y-1">
				{rakat.steps.map((step, stepIndex) => (
				  <li key={stepIndex}>{step}</li>
				))}
			  </ul>
			</div>
		  ))}

		  {sunnatRakats.map((rakat, index) => (
			<div key={`sunnat-${index}`} className="space-y-2">
			  <h3 className="font-semibold text-green-700">{rakat.title}</h3>
			  {rakat.niyat && (
				<div className="pl-4 border-l-2 border-green-200 mb-2">
				  <p className="italic text-green-700">Niyat: "{rakat.niyat}"</p>
				</div>
			  )}
			  <ul className="list-disc pl-5 space-y-1">
				{rakat.steps.map((step, stepIndex) => (
				  <li key={stepIndex}>{step}</li>
				))}
			  </ul>
			</div>
		  ))}
		</div>
	  </CardContent>
	</Card>
  )
}