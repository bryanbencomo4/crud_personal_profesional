import React, {useState, useEffect, forwardRef} from 'react';
import MaterialTable from "material-table";
import axios from 'axios';
import {
  Modal, TextField, Button, Select, InputLabel, MenuItem,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { API_URL } from '../../config/config';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const columns= [
  { title: 'Id', field: 'id' },
  { title: 'Nombres y Apellidos', field: 'nombres_y_apellidos' },
  { title: 'Cédula', field: 'cedula' },
  { title: 'Profesion', field: 'profesion' },
  { title: 'Telefono', field: 'telefono' },
  { title: 'Municipio', field: 'municipio' },
  { title: 'Dirección', field: 'direccion' },
  { title: 'Sexo', field: 'sexo' },
  { title: 'Tipo de Vehiculo', field: 'tipoVehiculo' },
  { title: 'Marca de Vehiculo', field: 'marcaVehiculo' },
  { title: 'Año Vehículo', field: 'anyo_vehiculo' },
];

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

const Dashboard = () => {
  const styles= useStyles();
  const [profesionalesData, setProfesionalesData]= useState([]);
  const [municipiosData, setMunicipiosData]= useState([]);
  const [sexosData, setSexosData]= useState([]);
  const [profesionesData, setProfesionesData]= useState([]);
  const [tipoVehiculosData, setTipoVehiculosData]= useState([]);
  const [marcaVehiculosData, setMarcaVehiculosData]= useState([]);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [profesionalSeleccionado, setProfesionalSeleccionado]=useState({
    id: null,
    nombres_y_apellidos: null,
    cedula: null,
    profesion_id: 1,
    telefono: null,
    municipio_id: 1,
    direccion: null,
    sexo_id: 1,
    tipo_vehiculo_id: 1,
    marca_vehiculo_id: 1,
    anyo_vehiculo: null,
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setProfesionalSeleccionado(prevState=>({
      ...prevState,
      [name]: value
    }));
  }

  const getMunicipios=async()=>{
    await axios.get(`${API_URL}/municipio`)
    .then(response => {

      if (!response.data.error) {
        setMunicipiosData(response.data.data);
      }

    }).catch(error=>{
      console.log(error);
    })
  }

  const getTipoVehiculos=async()=>{
    await axios.get(`${API_URL}/tipo_vehiculo`)
    .then(response => {

      if (!response.data.error) {
        setTipoVehiculosData(response.data.data);
      }

    }).catch(error=>{
      console.log(error);
    })
  }

  const getMarcaVehiculos=async()=>{
    await axios.get(`${API_URL}/marca_vehiculo`)
    .then(response => {

      if (!response.data.error) {
        setMarcaVehiculosData(response.data.data);
      }

    }).catch(error=>{
      console.log(error);
    })
  }

  const getSexos=async()=>{
    await axios.get(`${API_URL}/sexo`)
    .then(response => {

      if (!response.data.error) {
        setSexosData(response.data.data);
      }

    }).catch(error=>{
      console.log(error);
    })
  }

  const getProfesiones=async()=>{
    await axios.get(`${API_URL}/profesion`)
    .then(response => {

      if (!response.data.error) {
        setProfesionesData(response.data.data);
      }

    }).catch(error=>{
      console.log(error);
    })
  }

  const getProfesionales=async()=>{
    await axios.get(`${API_URL}/profesional`)
    .then(response => {

      if (!response.data.error) {
        const newData = response.data?.data?.map(item => ({
          ...item,
          municipio: item.municipio.nombre,
          profesion: item.profesion.nombre,
          sexo: item.sexo.nombre,
          tipoVehiculo: item.tipoVehiculo.nombre,
          marcaVehiculo: item.marcaVehiculo.nombre,
        }));

        setProfesionalesData(newData);
      }

    }).catch(error=>{
      console.log(error);
    })
  }

  const storeProfesional = async()=>{

    delete profesionalSeleccionado.id;

    await axios.post(`${API_URL}/profesional`, profesionalSeleccionado)
    .then(response=>{
      if (!response.data.error) {

        const newData = profesionalesData;

        setProfesionalesData([
          ...newData,
          {
            ...response.data?.data,
            municipio: response.data?.data?.municipio.nombre,
            profesion: response.data?.data?.profesion.nombre,
            sexo: response.data?.data?.sexo.nombre,
            tipoVehiculo: response.data?.data?.tipoVehiculo.nombre,
            marcaVehiculo: response.data?.data?.marcaVehiculo.nombre,
          }
        ]);
      }

      abrirCerrarModalInsertar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const editProfesional = async()=>{
    await axios.put(`${API_URL}/profesional`+"/"+profesionalSeleccionado.id, profesionalSeleccionado)
    .then(response=>{
     
      if (!response.data.error) {
        const newData = profesionalesData;
  
        const index = newData.findIndex((item) => item.id == response.data?.data?.id);
  
        if (index != -1) {
          newData[index] = {
            ...response.data?.data,
            municipio: response.data?.data?.municipio.nombre,
            profesion: response.data?.data?.profesion.nombre,
            sexo: response.data?.data?.sexo.nombre,
            tipoVehiculo: response.data?.data?.tipoVehiculo.nombre,
            marcaVehiculo: response.data?.data?.marcaVehiculo.nombre,
          };

          setProfesionalesData([]);

          setProfesionalesData([
            ...newData
          ]);
        }
        
      }

      abrirCerrarModalEditar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const deleteProfesional=async()=>{
    await axios.delete(`${API_URL}/profesional`+"/"+profesionalSeleccionado.id)
    .then(response=>{
      setProfesionalesData(profesionalesData.filter(profesional=>profesional.id!==profesionalSeleccionado.id));
      abrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const seleccionarProfesional=(profesional, caso)=>{
    setProfesionalSeleccionado(profesional);
    (caso==="Editar")?abrirCerrarModalEditar()
    :
    abrirCerrarModalEliminar()
  }

  const resetProfesionalSeleccionado = () => {
    setProfesionalSeleccionado({
      id: null,
      nombres_y_apellidos: null,
      cedula: null,
      profesion_id: 1,
      telefono: null,
      municipio_id: 1,
      direccion: null,
      sexo_id: 1,
      tipo_vehiculo_id: 1,
      marca_vehiculo_id: 1,
      anyo_vehiculo: null,
    });
  }
  
  const abrirCerrarModalInsertar=()=>{
    if (modalInsertar) { resetProfesionalSeleccionado(); }

    setModalInsertar(!modalInsertar);
  }

  
  const abrirCerrarModalEditar=()=>{
    if (modalEditar) { resetProfesionalSeleccionado(); }

    setModalEditar(!modalEditar);

  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  useEffect(()=>{
    getMunicipios();
    getProfesionales();
    getProfesiones();
    getSexos();
    getTipoVehiculos();
    getMarcaVehiculos();
  }, [])

  const bodyForm=(
    <div className={styles.modal}>
      
      {!profesionalSeleccionado.id && (
        <h3>Agregar Nuevo Profesional</h3>
      )}

      {profesionalSeleccionado.id && (
        <h3>Editar Profesional</h3>
      )}

      <TextField className={styles.inputMaterial} label="Nombres y Apellido" name="nombres_y_apellidos" onChange={handleChange} value={profesionalSeleccionado?.nombres_y_apellidos}/>
      <br />
      <TextField className={styles.inputMaterial} label="Cédula" name="cedula" onChange={handleChange} value={profesionalSeleccionado?.cedula}/>
      <br /><br />
      <InputLabel id="profesion">Profesión</InputLabel>
      <Select
        name="profesion_id"
        labelId="profesion"
        onChange={handleChange}
        value={profesionalSeleccionado?.profesion_id}
        className={styles.inputMaterial}
      >
        {profesionesData?.map((item) => {
          return <MenuItem value={item.id}>{item.nombre}</MenuItem>
        })}
      </Select>
      <br />
      <TextField className={styles.inputMaterial} label="Teléfono" name="telefono" onChange={handleChange} value={profesionalSeleccionado?.telefono}/>
      <br /><br />
      <InputLabel id="sexo">Sexo</InputLabel>
      <Select
        name="sexo_id"
        labelId="sexo"
        value={profesionalSeleccionado?.sexo_id}
        className={styles.inputMaterial}
        onChange={handleChange}
      >
        
        {sexosData?.map((item) => {
          return <MenuItem value={item.id}>{item.nombre}</MenuItem>
        })}
      </Select>
      <br /><br />
      <InputLabel id="municipio">Municipio</InputLabel>
      <Select
        name="municipio_id"
        labelId="municipio"
        value={profesionalSeleccionado?.municipio_id}
        className={styles.inputMaterial}
        onChange={handleChange}
      >
        
        {municipiosData?.map((item) => {
          return <MenuItem value={item.id}>{item.nombre}</MenuItem>
        })}
      </Select>
      <br />
      <TextField className={styles.inputMaterial} label="Dirección" name="direccion" onChange={handleChange} value={profesionalSeleccionado?.direccion}/>
      <br /><br />
      <InputLabel id="tipo_vehiculo">Tipo de Vehículo</InputLabel>
      <Select
        name="tipo_vehiculo_id"
        labelId="tipo_vehiculo_id"
        value={profesionalSeleccionado?.tipo_vehiculo_id}
        className={styles.inputMaterial}
        onChange={handleChange}
      >
        {tipoVehiculosData?.map((item) => {
          return <MenuItem value={item.id}>{item.nombre}</MenuItem>
        })}
      </Select>
      <br /><br />
      <InputLabel id="marca_vehiculo">Tipo de Vehículo</InputLabel>
      <Select
        name="marca_vehiculo_id"
        labelId="marca_vehiculo_id"
        value={profesionalSeleccionado?.marca_vehiculo_id}
        className={styles.inputMaterial}
        onChange={handleChange}
      >
        {marcaVehiculosData?.map((item) => {
          return <MenuItem value={item.id}>{item.nombre}</MenuItem>
        })}
      </Select>
      <br />
      <TextField className={styles.inputMaterial} label="Año vehículo" name="anyo_vehiculo" onChange={handleChange} value={profesionalSeleccionado?.anyo_vehiculo}/>
      <br />
      <br /><br />

      {profesionalSeleccionado?.id && (
        <div align="right">
          <Button color="primary" onClick={()=>editProfesional()}>Editar</Button>
          <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
        </div>
      )}

      {!profesionalSeleccionado?.id && (
        <div align="right">
          <Button color="primary" onClick={()=>storeProfesional ( )}>Insertar</Button>
          <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
        </div>
      )}
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar al profesional <b>{profesionalSeleccionado && profesionalSeleccionado.profesional}</b>? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>deleteProfesional()}>Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )

  return (
    <div className="App">
      <br />
      <Button onClick={()=>abrirCerrarModalInsertar()}>Insertar Profesional</Button>
      <br /><br />
      <MaterialTable
          icons={tableIcons}
          columns={columns}
          data={profesionalesData}
          title="Personal Profesional (By bjbh415@gmail.com)"
          actions={[
            {
              icon: 'E',
              tooltip: 'Editar Profesional',
              onClick: (event, rowData) => seleccionarProfesional(rowData, "Editar")
            },
            {
              icon: 'X',
              tooltip: 'Eliminar Profesional',
              onClick: (event, rowData) => seleccionarProfesional(rowData, "Eliminar")
            }
          ]}
          options={{
            actionsColumnIndex: -1,
            search: false,
            filtering: false,
            paging: false,
          }}
          localization={{
            header:{
              actions: "Acciones"
            }
          }}
        />

        <Modal
        open={modalInsertar}
        onClose={abrirCerrarModalInsertar}>
          {bodyForm}
        </Modal>

        <Modal
        open={modalEditar}
        onClose={abrirCerrarModalEditar}>
          {bodyForm}
        </Modal>

        <Modal
        open={modalEliminar}
        onClose={abrirCerrarModalEliminar}>
          {bodyEliminar}
        </Modal>
    </div>
  );
};

export default Dashboard;
