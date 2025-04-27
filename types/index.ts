export interface Rakat {
	title: string
	niyat?: string
	steps: string[]
}

export interface PrayerCardProps {
	title: string
	description: string
	sunnatRakats?: Rakat[]
	farzRakats?: Rakat[]
}

export interface RecitationItemProps {
	title: string
	content: string
}
