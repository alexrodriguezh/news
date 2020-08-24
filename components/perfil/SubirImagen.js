import React, { useState, useEffect } from 'react'
import { useMutation, gql } from '@apollo/client'
import Cookies from 'universal-cookie'


const IMAGEN_PERFIL = gql`
    mutation upload($file: Upload!){
        upload(file: $file){
            id
            name
            url
        }
    }
` 

const SubirImagen = () => {

    const cookie = new Cookies()

    const [upload] = useMutation(IMAGEN_PERFIL);
    const onChange = async ({
        target: {
            validity,
            files: [file]
        }
    }) => {
        try {
            if(validity.valid){
                const { data } = await upload({
                    variables: { file }
                })
                cookie.set('idImagen', data.upload.id, { path: '/' });
                console.log(data.upload.id)
            }
            
        } catch (error) {
            console.log(error)
        }
    } 
    //validity.valid && mutate({ variables: { file } });



    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>{JSON.stringify(error, null, 2)}</div>;





    // const [ image, setImage ] = useState('')

    // useEffect(()=>{
    //     console.log(image)
    // }, [image])

    // const [upload] = useMutation(IMAGEN_PERFIL)

    // // Insertar imagen
    // const subirImage = async () => {
    //     console.log(image)

    //     try {
    //         const { data } = await upload({
    //             variables: {
    //                 file: image
    //             }
    //         })
    //         console.log(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const imagenSeleccionada = (img) => {
    //     setImage(img)
    // }

    return (
        <div className="flex form-group">
            <label className="mr-3">Subir imagen: </label>
            <input id="imagen" name="imagen" type="file" 
                onChange={onChange} 
                // onChange={ e => imagenSeleccionada(e.currentTarget.files[0])} 
                className="form-control" 
            />
        </div>
    )
}

export default SubirImagen