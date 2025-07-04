import {Box, Button} from '@mui/material';
import {LineChart} from '@mui/x-charts';
import {useRef} from 'react';
import html2canvas from 'html2canvas';

const PageCoverage = () => {
  const printRef = useRef<HTMLDivElement | null>(null);
  const data = [
    {
      date: new Date(2023, 9, 31), // end of october
      app: 0.056,
      header: 0,
      footer: 0,
    },
    {
      date: new Date(2023, 10, 15), // mid november
      app: 0.081,
      header: 0,
      footer: 0,
    },
    {
      date: new Date(2023, 10, 30), // end november
      app: 0.072,
      header: 0,
      footer: 0,
    },
    {
      date: new Date(2023, 11, 15), // mid december
      app: 0.072,
      header: 0.38,
      footer: 0.52,
    },
    {
      date: new Date(2023, 11, 31), // end december
      app: 0.07,
      header: 0.38,
      footer: 0.39,
    },
    {
      date: new Date(2024, 0, 15), // mid january
      app: 0.05,
      header: 0.38,
      footer: 0.56,
    },
    {
      date: new Date(2024, 1, 15), // mid february
      app: 0.19,
      header: 0.38,
      footer: 0.52,
    },
  ];

  const keyToLabel: {[key: string]: string} = {
    app: 'APP',
    header: 'HEADER',
    footer: 'FOOTER',
  };

  const colors: {[key: string]: string} = {
    app: '#E94F37',
    header: '#3F88C5',
    footer: '#44BBA4',
  };

  const onDownloadChartImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element as HTMLElement);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = `chart_${new Date()}.jpg`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <section data-testid="PageCoverage">
      <Button onClick={onDownloadChartImage}>Download chart image</Button>
      <Box sx={{background: 'white', width: 650}} ref={printRef}>
        <LineChart
          disableAxisListener
          disableLineItemHighlight={false}
          yAxis={[
            {
              valueFormatter: value => {
                // show percentage
                return `${(value * 100).toString()}%`;
              },
            },
          ]}
          xAxis={[
            {
              dataKey: 'date',
              // dataKey: 'year',
              valueFormatter: value => {
                const [month, day, year] = new Date(value)
                  .toLocaleDateString()
                  .split('/');
                return `${day}/${month}/${year}`;
              },
              // valueFormatter: value => value.toString(),
              min: new Date(2023, 9, 31), // end of october
              max: new Date(),
            },
          ]}
          series={Object.keys(keyToLabel).map(key => ({
            dataKey: key,
            label: keyToLabel[key],
            color: colors[key],
            showMark: false,
            // ...stackStrategy,
          }))}
          width={650}
          height={450}
          dataset={data}
        />
      </Box>
    </section>
  );
};

export default PageCoverage;
