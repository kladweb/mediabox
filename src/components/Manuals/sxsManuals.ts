import { appColors } from "../../services/appColors";
export const sxCardMain = {
  width: '100%',
  m: "1.5em auto",
  display: 'block',
  backgroundColor: appColors.light11,
  transition: '1s',
  border: `solid 3px ${appColors.dark2}`,
  borderRadius: '1em'
}

export const sxHeadMain = {
  width: "fit-content",
  m: '0 auto',
  p: '0.25em',
  display: 'block',
  // textDecoration: 'underline',
  textAlign: 'center',
  fontSize: '1.25em',
  fontWeight: '600',
  color: appColors.dark2,
  backgroundColor: appColors.mid2,
  borderRadius: '0.25em',
}

export const sxManualText1 = {
  py: '0.5em',
  fontSize: '1.25em',
  textAlign: 'left',
  color: `${appColors.light1}`,
  whiteSpace: 'pre-line',
}

export const sxLinksRegistration = {
  display: 'inline-block',
  p: '0.2em 0.5em 0.4em',
  m: '0 0.5em',
  textDecoration: 'none',
  color: `${appColors.mid2}`,
  fontSize: '1.1em',
  fontWeight: '400',
  backgroundColor: `${appColors.mid1}`,
  borderRadius: '0.5em',
  transition: '0.2s',
  ':hover': {
    opacity: '0.8',
    transition: '0.2s'
  }
}
