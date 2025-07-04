import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridTreeNodeWithRender,
  GridValueGetterParams,
} from '@mui/x-data-grid';

const Links = (props: {
  params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>;
}) => {
  return (
    <Stack>
      <Button>Download PDF</Button>
      <Button>Export to Excel</Button>
    </Stack>
  );
};

const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 90, sortable: false},
  {
    field: 'documentNumber',
    headerName: 'Document Number',
    width: 150,
    sortable: false,
  },
  {
    field: 'invoiceType',
    headerName: 'Invoice Type',
    width: 150,
    sortable: true,
  },
  {
    field: 'amountCurrency',
    headerName: 'Amount and currency',
    sortable: true,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.amount || ''} ${params.row.currency || ''}`,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 150,
    sortable: true,
  },
  {
    field: 'menu',
    headerName: 'Menu',
    flex: 1,
    sortable: false,
    hideable: true,
    renderHeader: () => null,
    renderCell: params => {
      return <Links params={params} />;
    },
  },
];

const rows = [
  {
    id: 1,
    documentNumber: '123',
    invoiceType: 'Custom',
    amount: 200,
    currency: 'Eur',
    date: '10/02/2022',
    pdfLink: '',
    excelLink: '',
    specialExcelLink: '',
  },
  {
    id: 2,
    documentNumber: '345',
    invoiceType: 'Commercial',
    amount: 100,
    currency: 'Eur',
    date: '12/05/2023',
    pdfLink: '',
    excelLink: '',
    specialExcelLink: '',
  },
  {
    id: 3,
    documentNumber: '345',
    invoiceType: 'Commercial',
    amount: 5,
    currency: 'Eur',
    date: '12/05/2024',
    pdfLink: '',
    excelLink: '',
    specialExcelLink: '',
  },
];

const DataGridTest = () => {
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box sx={{flex: 1}}>1-2 of 2</Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{flex: 2}}>
          <Button>Download selected</Button>
          <Button>Export selected to excel</Button>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Per Page</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={age}
              label="Age"
              //   onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <Box
        sx={{
          height: 400,
          width: 'calc(100% - 20px)',
          background: '#eaeaea',
          padding: '10px',
        }}>
        <DataGrid
          rows={rows}
          columns={columns?.filter(column => column.field !== 'id')}
          checkboxSelection
          disableRowSelectionOnClick
          hideFooterPagination
          disableColumnMenu
          sx={{
            '&.MuiDataGrid-root': {
              border: 'none',
            },
            '& .MuiDataGrid-main': {
              border: 'none',
            },
            '& .MuiDataGrid-columnHeaders': {
              border: 'none',
            },
            '& .MuiDataGrid-row': {
              borderRadius: '5px',
              background: 'white',
              marginBottom: '10px',
            },
          }}
        />
      </Box>
    </>
  );
};

export default DataGridTest;
