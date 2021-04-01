import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { CircularProgress, Table, TableBody, TableCell } from '@material-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Container, IconButton, TableFooter, TablePagination } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { KeyboardArrowLeft, KeyboardArrowRight, LastPage, FirstPage } from '@material-ui/icons';


const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));
function TablePaginationActions(props)
{
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) =>
  {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) =>
  {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) =>
  {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) =>
  {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
      </IconButton>
    </div>
  );
}
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 800,
  },
  button: {
    margin: theme.spacing(1),
  },
}))

export default function TableauPaginate(props)
{
  const { categories } = props
  const classes = useStyles();


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // const emptyRows = categories && rowsPerPage - Math.min(rowsPerPage, categories.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) =>
  {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) =>
  {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container maxWidth="md">
      <TableContainer component={Paper}  >
        <Table className={classes.table} size="small" aria-label="categories table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories ?
              (rowsPerPage > 0
                ? categories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : categories
              ).map((category, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="left">{category.name}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      startIcon={<DeleteIcon />}
                      size="small"
                      onClick={() => props.handelDelete(category._id)}
                    >Delete</Button>
                    {props.Update(category)}
                  </TableCell>
                </TableRow>
              )) : <CircularProgress />}
          </TableBody>
          <TableFooter>
            <TableRow>
              {props.Add()}
              {categories &&
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={categories.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              }
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
}
