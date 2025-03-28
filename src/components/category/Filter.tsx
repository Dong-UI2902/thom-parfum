import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  Slider,
  TextField,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { formatter, isMobile } from "../../Helper/Helper";
import { PriceProps, ProductProps } from "../../context/types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Filter: React.FC<{
  data: ProductProps[];
  temp: ProductProps[];
  setTemp: any;
}> = ({ data, temp, setTemp }) => {
  const [selected, setSelected] = React.useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [value, setValue] = React.useState<number[]>([0, 10000000]);
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected((prev) => [...prev, event.target.name]);
    } else {
      setSelected((prev) => prev.filter((item) => item !== event.target.name));
    }
  };

  useEffect(() => {
    setTemp(data);
    if (brands.length === 0) {
      const uniqueNames: string[] = [];

      data.filter((element) => {
        const isDuplicate = uniqueNames.includes(element.brand);

        if (!isDuplicate) {
          uniqueNames.push(element.brand);

          return true;
        }

        return false;
      });

      setBrands(uniqueNames);
    }
  }, [data]);

  const inRange = (prices: PriceProps[]) => {
    if (prices[0].salePrice) {
      return (
        Number(prices[0].salePrice) >= value[0] &&
        Number(prices[0].salePrice) <= value[1]
      );
    }
    return (
      Number(prices[0].price) >= value[0] && Number(prices[0].price) <= value[1]
    );
  };

  const isIncludes = (brand: string) => {
    if (selected.length > 0) {
      return selected.includes(brand);
    }

    return true;
  };

  const filterProduct = () => {
    if (data.length > 0) {
      const arr = [];
      for (let index = 0; index < data.length; index++) {
        const element = data[index];

        if (isIncludes(element.brand) && inRange(element.prices)) {
          arr.push(element);
        }
      }

      setTemp(arr);
    }
  };

  const handleChangeAccordion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  useEffect(() => {
    filterProduct();
  }, [selected]);

  const filterCard = (
    <>
      <div className="category__title">Bộ lọc</div>
      <div className="category__content">
        <p>Thương hiệu</p>
        <div className="category__filter-brands">
          <FormGroup>
            {brands.map((item, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    name={item}
                    checked={selected.includes(item)}
                    onChange={(e) => handleCheckbox(e)}
                    color="primary"
                  />
                }
                label={item}
              />
            ))}
          </FormGroup>
        </div>
      </div>
      <div className="category__content">
        <p>Mức giá</p>
        <Box sx={{ maxWidth: "90%", margin: "0 auto" }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            max={10000000}
            color="primary"
          />
        </Box>
        <Box
          flexGrow={1}
          display={"flex"}
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              input: { fontSize: "14px" },
            },
          }}
        >
          <TextField
            id="standard-read-only-input"
            variant="standard"
            value={formatter.format(value[0])}
          />

          <TextField
            id="standard-read-only-input"
            variant="standard"
            value={formatter.format(value[1])}
          />
        </Box>
      </div>
      <div className="category__content">
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            filterProduct();
            setExpanded(false);
          }}
          color="primary"
        >
          Lọc giá sản phẩm
        </Button>
      </div>
    </>
  );

  return (
    <div className="sticky">
      {isMobile() ? (
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChangeAccordion("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Lọc sản phẩm</Typography>
          </AccordionSummary>
          <AccordionDetails>{filterCard}</AccordionDetails>
        </Accordion>
      ) : (
        filterCard
      )}
    </div>
  );
};

export default Filter;
