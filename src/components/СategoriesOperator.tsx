import { useState } from "react";
import { Params, useParams, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Box,
  Stack,
  Accordion, AccordionSummary,
  AccordionDetails, CircularProgress,
  Button, ButtonGroup
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { appColors } from "../services/appColors";
import type { ContextCategoriesType, ITranslate } from "../types/typesBox";

function CategoriesOperator(): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const {categoriesList, channelsList, isListLoaded} = useOutletContext<ContextCategoriesType>();
  const [isImagesLoaded, setIsImagesLoaded] = useState<boolean>(false);
  const [expandedAccordions, setExpandedAccordions] = useState<number[]>([]);
  const params: Readonly<Params<string>> = useParams();
  let countLoaded = 0;
  let operator: string = '';
  if (params.operator) {
    operator = params.operator;
  }
  let accordionList: JSX.Element = <></>;

  const handlerErrorImg = (e: any) => {
    const target = e.target as HTMLTextAreaElement;
    target.setAttribute('src', '/img/channels/noimage.png');
  }

  const handlerLoadImg = () => {
    countLoaded++;
    if (isListLoaded && countLoaded >= channelsList[`${operator}List`].length) {
      setIsImagesLoaded(true);
    }
  }

  const collapseAll = () => {
    setExpandedAccordions([]);
  };

  const expandAll = () => {
    const newArray: number[] = [];
    categoriesList[operator].forEach((log: string, index: number) => newArray.push(index));
    setExpandedAccordions(newArray);
  };

  const changeAccordion = (index: number) => {
    const newArray = [...expandedAccordions];
    if (expandedAccordions.includes(index)) {
      let number = newArray.indexOf(index);
      newArray.splice(number, 1);
      setExpandedAccordions(newArray);
    } else {
      newArray.push(index);
      setExpandedAccordions(newArray);
    }
  }

  const loader: JSX.Element = (
    <Box component="div"
         sx={{
           width: '100%',
           textAlign: 'center',
           my: '2rem'
         }}>
      <Stack sx={{color: `${appColors.mid2}`, display: 'block'}}>
        <CircularProgress color="inherit" sx={{textAlign: 'center'}}/>
      </Stack>
    </Box>
  );

  if (isListLoaded) {
    accordionList = categoriesList[operator].map((element: string, index: number) => {
      return (
        <Accordion
          defaultExpanded={false}
          key={index}
          sx={{color: appColors.light1, backgroundColor: appColors.light11}}
          expanded={expandedAccordions.includes(index)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: appColors.light1}}/>}
            aria-controls={`${element}-content`}
            id={`${element}-header`}
            sx={{mx: {xs: '10%', md: '35%'}, fontSize: {xs: '1rem', md: '1.25rem'}}}
            onClick={() => {
              changeAccordion(index);
            }}
          >
            {element}
          </AccordionSummary>
          <AccordionDetails
            sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}
          >
            {
              (isListLoaded) ?
                null
                :
                channelsList[`${operator}List`].map((channelObj: object, index: number) => {
                  let srcImgChannel: string = channelObj['src' as keyof (typeof channelObj)];
                  if (!srcImgChannel) {
                    srcImgChannel = '/img/channels/noimage.png';
                  }
                  if (channelObj['group' as keyof (typeof channelObj)] === element) {
                    return (
                      <Box key={index} component="div"
                           sx={{
                             display: 'block',
                             m: '0.2rem 0.5rem',
                             width: '21rem',
                             textAlign: 'left',
                             backgroundColor: appColors.light11,
                             borderRadius: '0.5rem'
                           }}
                      >
                        <Box
                          component="img"
                          src={srcImgChannel}
                          alt={channelObj['name' as keyof (typeof channelObj)]}
                          sx={{
                            display: 'inline-block',
                            m: {xs: '0.2rem 0.5rem', md: '0.5rem'},
                            height: {xs: '2rem', md: '3rem'},
                            maxWidth: {xs: '25%', md: '25%'},
                            objectFit: "contain",
                            borderRadius: {xs: '3px', md: '5px'},
                            verticalAlign: 'middle'
                          }}
                          onError={handlerErrorImg}
                          onLoad={handlerLoadImg}
                        />
                        <Box component="div" sx={{display: 'inline-block', width: '70%', verticalAlign: 'middle'}}>
                          <Box component="span" sx={{wordWrap: 'break-word'}}
                          >
                            {channelObj['name' as keyof (typeof channelObj)]}
                          </Box>
                        </Box>
                      </Box>
                    );
                  }
                })
            }
          </AccordionDetails>
        </Accordion>
      );
    });
  }

  return (
    <Box component="div"
         sx={{
           width: '100%',
           textAlign: 'center',
           mb: '3rem'
         }}>
      <Box
        component="img"
        src={`/img/operators/${operator.toLowerCase()}.png`}
        alt={operator}
        sx={{
          margin: "1.5rem auto 0",
          width: {xs: '15rem', md: '20rem'},
          objectFit: "contain",
          backgroundColor: appColors.light1,
          borderRadius: {xs: '5px', md: '10px'},
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="outlined" color="warning" aria-label="Medium-sized button group">
          <Button key="one" onClick={expandAll}>{t('menuExpand')}</Button>,
          <Button key="three" onClick={collapseAll}>{t('menuCollapse')}</Button>
        </ButtonGroup>
      </Box>

      <Box component="div"
           sx={{
             display: `${(isImagesLoaded) ? 'block' : 'none'}`,
           }}
      >
        {accordionList}
      </Box>
      {
        (!isImagesLoaded) && <>{loader}</>
      }
    </Box>
  )
}

export default CategoriesOperator;
