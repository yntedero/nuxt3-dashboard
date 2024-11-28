import { Button } from '@/components/ui/button'
import type { ColumnDef } from '@tanstack/vue-table'
import { ArrowUpDown } from 'lucide-vue-next'
import { h } from 'vue'

export const columns: ColumnDef<any>[] = [
	{
		accessorKey: 'email',
		header: ({ column }) => {
			return h(
				Button,
				{
					variant: 'ghost',
					onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				},
				() => ['Email', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })],
			)
		},
		cell: ({ row }: any) => {
			const email = row.getValue('email')
			return h('div', { class: 'text-left font-medium' }, email)
		},
	},
	{
		accessorKey: 'amount',
		header: () => h('div', { class: 'text-left' }, 'Amount'),
		cell: ({ row }: any) => {
			const amount = row.getValue('amount')
			return h('div', { class: 'text-left font-medium' }, `$${amount}`)
		},
	},
	{
		accessorKey: 'status',
		header: () => h('div', { class: 'text-left' }, 'Status'),
		cell: ({ row }: any) => {
			const status = row.getValue('status')
			return h('div', { class: 'text-left font-medium' }, status)
		},
	},
	{
		accessorKey: 'id',
		header: () => h('div', { class: 'text-left' }, 'ID'),
		cell: ({ row }: any) => {
			const id = row.getValue('id')
			return h('div', { class: 'text-left font-medium' }, id)
		},
	},
]
