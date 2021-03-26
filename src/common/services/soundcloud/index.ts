import icon from '../../../../res/soundcloud.svg'
import { Embeddable, Resolvable, Searchable, Service } from '../types'
import { embed } from './embed'
import { resolve } from './resolve'
import { search } from './search'

export const Soundcloud: Service & Searchable & Resolvable & Embeddable = {
  id: 'soundcloud',
  name: 'Soundcloud',
  regex: /((http:\/\/(soundcloud\.com\/.*|soundcloud\.com\/.*\/.*|soundcloud\.com\/.*\/sets\/.*|soundcloud\.com\/groups\/.*|snd\.sc\/.*))|(https:\/\/(soundcloud\.com\/.*|soundcloud\.com\/.*\/.*|soundcloud\.com\/.*\/sets\/.*|soundcloud\.com\/groups\/.*)))/,
  icon,
  search,
  resolve,
  embed,
}
