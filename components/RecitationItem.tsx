

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RecitationItemProps } from '@/types'



export default function RecitationItem({ title, content }: RecitationItemProps) {
	return (
		<AccordionItem value={title.toLowerCase().replace(/\s/g, '-')}>
			<AccordionTrigger className='text-green-700 hover:text-green-800'>
				{title}
			</AccordionTrigger>
			<AccordionContent>
				<div className='whitespace-pre-line pl-4 border-l-2 border-green-200 text-gray-700'>
					{content}
				</div>
			</AccordionContent>
		</AccordionItem>
	)
}