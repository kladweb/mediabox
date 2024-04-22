import React, { useEffect, useState } from "react";
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
import { ContextCategoriesType, ITranslate } from "../types/typesBox";
import ListChannel from "./ListChannel";
import { operators } from "../data/dataIPTV";

function CategoriesOperator(): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const {categoriesList, channelsList, isListLoaded} = useOutletContext<ContextCategoriesType>();
  const [expandedAccordions, setExpandedAccordions] = useState<number[]>([]);
  const params: Readonly<Params<string>> = useParams();
  const operator = params.operator;
  const links: string[] = operators[operator as keyof (typeof operators)]['links'];
  let accordionList: JSX.Element = <></>;

  const handlerOperator = (link: string): void => {
    window.open(link);
  }

  const collapseAll = () => {
    setExpandedAccordions([]);
  };

  const expandAll = () => {
    const newArray: number[] = [];
    categoriesList[operator as string].forEach((log: string, index: number) => newArray.push(index));
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
        <CircularProgress color="inherit" sx={{textAlign: 'center'}} />
      </Stack>
    </Box>
  );

  if (isListLoaded) {
    accordionList = categoriesList[operator as string].map((element: string, index: number) => {
      return (
        <Accordion
          defaultExpanded={false}
          key={`accordion${operator}${index}`}
          sx={{color: appColors.light1, backgroundColor: appColors.light11}}
          expanded={expandedAccordions.includes(index)}
          TransitionProps={{unmountOnExit: true}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: appColors.light1}} />}
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
              channelsList[`${operator}List`].map((channelObj: object, i: number) => {
                let srcImgChannel: string = channelObj['src' as keyof (typeof channelObj)];
                let altImgChannel: string = channelObj['name' as keyof (typeof channelObj)];
                let nameImgChannel: string = channelObj['name' as keyof (typeof channelObj)];
                if (!srcImgChannel) {
                  srcImgChannel = '/img/channels/noimage.png';
                }
                if (channelObj['group' as keyof (typeof channelObj)] === element) {
                  return (
                    <ListChannel
                      key={`${operator}${i}`}
                      index={i}
                      srcImgChannel={srcImgChannel}
                      altImgChannel={altImgChannel}
                      nameImgChannel={nameImgChannel}
                    />
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
    <Box component="div" sx={{width: '100%', textAlign: 'center', mb: '3rem'}}>
      <Box
        component="img"
        src={`/img/operators/${operator ? operator.toLowerCase() : 'img'}.png`}
        alt={operator}
        onClick={(): void => {
          handlerOperator(links[0]);
        }}
        sx={{
          margin: "1.5rem auto 0",
          width: {xs: '15rem', md: '20rem'},
          objectFit: "contain",
          backgroundColor: appColors.light1,
          borderRadius: {xs: '5px', md: '10px'},
          cursor: "pointer"
        }}
      />
      {
        (isListLoaded) ?
          <>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', '& > *': {m: 1,},}}>
              <ButtonGroup variant="outlined" color="warning" aria-label="Medium-sized button group">
                <Button key="one" onClick={expandAll}>{t('menuExpand')}</Button>,
                <Button key="three" onClick={collapseAll}>{t('menuCollapse')}</Button>
              </ButtonGroup>
            </Box>
            <Box component="div" sx={{display: 'block'}}>
              {accordionList}
            </Box>
          </>
          :
          <>{loader}</>
      }
    </Box>
  )
}

export default React.memo(CategoriesOperator);
// export default CategoriesOperator;
