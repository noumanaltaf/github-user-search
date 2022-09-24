import { breakpoints } from './breakpoints'

describe('breakpoints', () => {
  describe('up', () => {
    it('should create a media query up from defined breakpoint', () => {
      expect(breakpoints.up('mobile')).toEqual('@media (min-width:0px)')
      expect(breakpoints.up('tablet')).toEqual('@media (min-width:640px)')
      expect(breakpoints.up('desktop')).toEqual('@media (min-width:960px)')
    })

    it('should create a media query up from custom breakpoint', () => {
      expect(breakpoints.up(123)).toEqual('@media (min-width:123px)')
    })
  })

  describe('down', () => {
    it('should create a media query down from defined breakpoints', () => {
      expect(breakpoints.down('mobile')).toEqual('@media (max-width:-0.05px)')
      expect(breakpoints.down('tablet')).toEqual('@media (max-width:639.95px)')
      expect(breakpoints.down('desktop')).toEqual('@media (max-width:959.95px)')
    })

    it('should create a media query down from custom breakpoint', () => {
      expect(breakpoints.down(123)).toEqual('@media (max-width:122.95px)')
    })
  })

  describe('between', () => {
    it('should create a media query between two defined breakpoints', () => {
      expect(breakpoints.between('mobile', 'tablet')).toEqual(
        '@media (min-width:0px) and (max-width:639.95px)',
      )
      expect(breakpoints.between('tablet', 'desktop')).toEqual(
        '@media (min-width:640px) and (max-width:959.95px)',
      )
      expect(breakpoints.between('mobile', 'desktop')).toEqual(
        '@media (min-width:0px) and (max-width:959.95px)',
      )
    })

    it('should create a media query between two custom breakpoints', () => {
      expect(breakpoints.between(123, 234)).toEqual(
        '@media (min-width:123px) and (max-width:233.95px)',
      )
    })
  })

  describe('only', () => {
    it('should create a media query only for a defined breakpoint', () => {
      expect(breakpoints.only('mobile')).toEqual(
        '@media (min-width:0px) and (max-width:639.95px)',
      )
      expect(breakpoints.only('tablet')).toEqual(
        '@media (min-width:640px) and (max-width:959.95px)',
      )
      expect(breakpoints.only('desktop')).toEqual('@media (min-width:960px)')
    })
  })
})
