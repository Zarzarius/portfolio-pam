import {projectType} from './projectType'
import {siteSettingsType} from './siteSettingsType'
import {homePageType} from './homePageType'
import {contactPageType} from './contactPageType'

export const schemaTypes = [projectType, siteSettingsType, homePageType, contactPageType] as const
