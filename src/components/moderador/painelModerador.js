import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { listaDenuncias } from '../../actions/listarDenunciasActions';
import DenunciaRow from './DenunciaRow';
import './painel-moderador.css';

// import 'materialize-css';

class PainelModerador extends Component {
  componentDidMount() {
    this.props.listaDenuncias();
  }

  render() {
    const { denuncias } = this.props;

    return (
      <div className="painel-moderador">
        <table>
          <thead>
            <tr>
              <th style={{ width: '60px' }}>Classificação</th>
              <th style={{ width: '100px' }}>Data</th>
              <th style={{ width: '120px' }}>Gênero</th>
              <th style={{ width: '120px' }}>Estado</th>
              <th style={{ width: '120px' }}>Cidade</th>
              <th style={{ width: '120px' }}>Bairro</th>
              <th style={{ width: '120px' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {denuncias.map(denuncia => (
              <DenunciaRow denuncia={denuncia} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

PainelModerador.propTypes = {
  listaDenuncias: PropTypes.func.isRequired,
  denuncias: PropTypes.arrayOf.isRequired

};

const mapDispatchToProps = dispatch => bindActionCreators({
  listaDenuncias,
}, dispatch);

function mapStateToProps(state) {
  return {
    denuncias: Object.keys(state.listaDenunciaReducer.denuncias)
      .map(key => state.listaDenunciaReducer.denuncias[key])
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PainelModerador);
