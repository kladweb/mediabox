import {ITranslate} from "../types/typesBox";
import {useTranslation} from "react-i18next";
import {Params, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {operators} from "../data/dataIPTV";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Stack
} from "@mui/material";
import {appColors} from "../services/appColors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListChannel from "./ListChannel";

export function CategoriesOperator(): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const params: Readonly<Params<string>> = useParams();
  const [channelsList, setChannelsList] = useState<object[]>([]);
  const [isListLoaded, setIsListLoaded] = useState<boolean>(false);
  const [categoriesList, setCategoriesList] = useState<string[]>([]);
  // const {categoriesList, channelsList, isListLoaded} = useOutletContext<ContextCategoriesType>();
  const [expandedAccordions, setExpandedAccordions] = useState<number[]>([]);
  // const [activeCard, setActiveCard] = useState<string>('');
  const operator = params.operator;
  const links: string[] = operators[operator as keyof (typeof operators)]['links'];
  // let accordionList: JSX.Element = <></>;

  useEffect(() => {
    // if (operator) {
    //   setActiveCard(operator);
    // }
    if (operator) {
      fetch(`/channelsLists/${operator}List.json`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          setChannelsList(data[operator]);
          setIsListLoaded(true);
          const listCategoriesOperator = [];
          const catList: string[] = [];
          data[operator].forEach((item: any, index: number) => {
            if (!catList.includes(data[operator][index]['group'])) {
              catList.push(data[operator][index]['group']);
            }
          });
          // for (let key in data) {
          //   catList[key] = [];
          //   data[key].forEach((elem: any, index: number) => {
          //     if (!catList[key].includes(data[key][index]['group'])) {
          //       catList[key].push(data[key][index]['group']);
          //     }
          //   })
          // }
          setCategoriesList(catList);
        })
        .catch((error) => {
          console.log(error);
        });
    }

  }, []);

  const handlerOperator = (link: string): void => {
    window.open(link);
  }

  const collapseAll = () => {
    setExpandedAccordions([]);
  };

  const expandAll = () => {
    if (categoriesList) {
      const newArray: number[] = [];
      // Object.keys(categoriesList).forEach((log: string, index: number) => newArray.push(index))
      categoriesList.forEach((log: string, index: number) => newArray.push(index));
      setExpandedAccordions(newArray);
    }
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
              {categoriesList.map((element: string, index: number) => {
                return (
                  <Accordion
                    defaultExpanded={false}
                    key={`accordion${index}`}
                    sx={{color: appColors.light1, backgroundColor: appColors.light11}}
                    expanded={expandedAccordions.includes(index)}
                    TransitionProps={{unmountOnExit: true}}
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
                        channelsList.map((channelObj: object, i: number) => {
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
              })}
            </Box>
          </>
          :
          <>{loader}</>
      }
    </Box>
  )
}