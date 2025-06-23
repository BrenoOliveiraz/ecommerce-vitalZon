import { type SchemaTypeDefinition } from 'sanity'
import {categoryType} from './categoryType'


import {authorType} from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ categoryType, authorType],
}
