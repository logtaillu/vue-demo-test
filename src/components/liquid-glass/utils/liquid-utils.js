import {ShaderDisplacementGenerator, fragmentShaders} from './shader-utils'
import {displacementMap, polarDisplacementMap, prominentDisplacementMap} from './map-utils'
// Generate shader-based displacement map using shaderUtils
export const generateShaderDisplacementMap = (width, height) => {
  const generator = new ShaderDisplacementGenerator({
    width,
    height,
    fragment: fragmentShaders.liquidGlass
  })

  const dataUrl = generator.updateShader()
  generator.destroy()

  return dataUrl
}
// "standard" | "polar" | "prominent" | "shader"
export const getMap = (mode, shaderMapUrl) => {
  switch (mode) {
    case 'standard':
      return displacementMap
    case 'polar':
      return polarDisplacementMap
    case 'prominent':
      return prominentDisplacementMap
    case 'shader':
      return shaderMapUrl || displacementMap
    default:
      throw new Error(`Invalid mode: ${mode}`)
  }
}

export function autoPx (val) {
  if (typeof val === 'string') {
    const num = Number(val)
    return isNaN(num) ? val : num + 'px'
  }
  return val + 'px'
}
