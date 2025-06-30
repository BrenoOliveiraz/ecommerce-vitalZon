'use client'

import React, { useState } from 'react'
import { Category } from '@/sanity.types'
import { useRouter } from 'next/navigation'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { ChevronsUpDown, Check } from 'lucide-react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput
} from './ui/command'
import { cn } from '@/lib/utils'

interface CategoriesSelectorProps {
  categories: Category[]
}

export default function CategoriesSelectorComponent({
  categories
}: CategoriesSelectorProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<string>('')
  const router = useRouter()

  const selectedTitle = categories.find(c => c._id === value)?.title

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            'w-full max-w-md justify-between rounded-xl px-4 py-2 shadow-sm',
            'bg-white dark:bg-zinc-900 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition'
          )}
        >
          {selectedTitle || 'Filter by category'}
          <ChevronsUpDown className="ml-2 h-4 w-4 text-zinc-500" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full max-w-md p-0 rounded-xl shadow-lg border dark:border-zinc-700">
        <Command>
          <CommandInput
            placeholder="Search category..."
            className="h-10 px-3 text-sm"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const inputValue = e.currentTarget.value.toLowerCase()
                const matchedCategory = categories.find((c) =>
                  c.title?.toLowerCase().includes(inputValue)
                )

                if (matchedCategory?.slug?.current) {
                  setValue(matchedCategory._id)
                  router.push(`/categories/${matchedCategory.slug.current}`)
                  setOpen(false)
                }
              }
            }}
          />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category._id}
                  value={category.title}
                  onSelect={() => {
                    const newValue = value === category._id ? '' : category._id
                    setValue(newValue)
                    router.push(`/categories/${category.slug?.current}`)
                    setOpen(false)
                  }}
                  className="flex items-center justify-between px-3 py-2 cursor-pointer"
                >
                  <span>{category.title}</span>
                  <Check
                    className={cn(
                      'h-4 w-4 text-blue-600',
                      value === category._id ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
