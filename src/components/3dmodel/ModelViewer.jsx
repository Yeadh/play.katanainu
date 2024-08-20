import '@google/model-viewer';
import './Models.css';

const ModelViwer = ({ src, title, text }) => {

    return(
        <div className='model-3d'>
            <model-viewer src={src} alt="A 3D model of a car" shadow-intensity="1" camera-controls auto-rotate ar ></model-viewer>
            <div className="text">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ModelViwer