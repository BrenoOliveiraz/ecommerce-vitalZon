import { type SchemaTypeDefinition } from 'sanity'
import {categoryType} from './categoryType'


import {authorType} from './authorType'
import { productType } from './productType'
import { blockContentType } from './blockContentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ categoryType, authorType, productType, blockContentType],
}
