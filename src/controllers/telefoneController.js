// import { Telefone } from "../models/Telefone.js";
// import telefoneRepository from "../repositories/telefoneRepositories.js";


// const telefoneController = {
//     criar: async (req, res) => {
//         try {
//             const { idCliente, numero } = req.body;
//             const telefone = Telefone.criar({ numero, idCliente });
//             const result = await telefoneRepository.criar(telefone)
//             res.status(201).json({ result });

//         } catch (error) {
//             console.log(error);
//             res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message })
//         }
//     },
//     atualizar: async (req, res) => {
//         try {
//             const id = Number(req.query.id);
//             const { idCliente, numero } = req.body;
//             const telefone = Telefone.editar({ numero, idCliente }, id);
//             const result = await telefoneRepository.editar(telefone);
//             res.status(200).json({ result });

//         } catch (error) {
//             console.log(error);
//             res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message })
//         }
//     },
//     deletar: async (req, res) => {
//         try {
//             const id = Number(req.params.id);
//             const result = await telefoneRepository.deletar(id);
//             res.status(200).json({ result });

//         } catch (error) {
//             console.log(error);
//             res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message })
//         }
//     },
//     selecionar: async (req, res) => {
//         try {
//             const result = await telefoneRepository.selecionar();
//             res.status(200).json({ result });

//         } catch (error) {
//             console.log(error);
//             res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message })
//         }
//     }
// }

// export default telefoneController;