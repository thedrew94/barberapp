/**
 * A component that renders an SVG icon based on the provided name.
 *
 * @param {string} [svgName] - string
 * @param {string} [svgWidth] - string
 * @param {string} [svgHeight] - string
 * @param {string} [svgFill] - string
 * @returns {JSX.Element|null} The rendered SVG icon or null if svgName is invalid
 *
 */

export function svgSelector({ svgName = '', svgWidth = '', svgHeight = '', svgFill = '', style = {} }) {
  switch (svgName) {
    case 'booking':
      return (
        <svg viewBox="0 0 24 24" width={svgWidth} height={svgHeight}>
          <path
            d="m6,18.5c0,.829-.671,1.5-1.5,1.5-2.481,0-4.5-2.019-4.5-4.5V6.5C0,4.019,2.019,2,4.5,2h.5v-.5c0-.829.671-1.5,1.5-1.5s1.5.671,1.5,1.5v.5h5v-.5c0-.829.672-1.5,1.5-1.5s1.5.671,1.5,1.5v.5h.5c2.481,0,4.5,2.019,4.5,4.5v7c0,.829-.672,1.5-1.5,1.5s-1.5-.671-1.5-1.5v-5.5H3v7.5c0,.827.673,1.5,1.5,1.5s1.5.671,1.5,1.5Zm14.374-1.167l-5.374-1.535v-4.169c0-.704-.447-1.368-1.129-1.543-1.001-.256-1.884.492-1.884,1.449l.013,7.388-1.152-.835c-.866-.722-2.153-.604-2.874.261-.722.866-.605,2.153.261,2.874l3.227,2.477c.349.268.778.414,1.218.414h.321c1.105,0,2-.895,2-2v-3.198l4.55,1.3c.854.244,1.45,1.035,1.45,1.923v.36c0,.829.672,1.5,1.5,1.5s1.5-.671,1.5-1.5v-.36c0-2.221-1.491-4.197-3.626-4.808Z"
            fill={svgFill}
          />
        </svg>
      );
    case 'feedback':
      return (
        <svg viewBox="0 0 24 24" width={svgWidth} height={svgHeight}>
          <path
            d="m17.829,10.762c-.141,0-.282-.045-.4-.133-.227-.17-.321-.464-.236-.734l.627-2.011-1.585-1.29c-.213-.181-.291-.476-.194-.738.096-.262.346-.437.626-.437h2.001l.708-1.987c.097-.261.346-.434.625-.434s.528.173.625.434l.708,1.987h2.001c.28,0,.53.175.626.438s.017.558-.197.739l-1.577,1.285.652,1.987c.089.269-.001.565-.226.738-.225.173-.534.185-.771.031l-1.836-1.196-1.805,1.208c-.112.075-.242.113-.371.113Zm-8-3c-.141,0-.282-.045-.4-.133-.227-.17-.321-.464-.236-.734l.627-2.011-1.585-1.29c-.213-.181-.291-.476-.194-.738.096-.262.346-.437.626-.437h2.001l.708-1.987c.097-.261.346-.434.625-.434s.528.173.625.434l.708,1.987h2.001c.28,0,.53.175.626.438s.017.558-.197.739l-1.577,1.285.652,1.987c.089.269-.001.565-.226.738-.225.173-.534.185-.771.031l-1.836-1.196-1.805,1.208c-.112.075-.242.113-.371.113ZM1.829,10.762c-.141,0-.282-.045-.4-.133-.227-.17-.321-.464-.236-.734l.627-2.011L.235,6.595c-.213-.181-.291-.476-.194-.738.096-.262.346-.437.626-.437h2.001l.708-1.987c.097-.261.346-.434.625-.434s.528.173.625.434l.708,1.987h2.001c.28,0,.53.175.626.438s.017.558-.197.739l-1.577,1.285.652,1.987c.089.269-.001.565-.226.738-.225.173-.534.185-.771.031l-1.836-1.196-1.805,1.208c-.112.075-.242.113-.371.113Zm15.17,3.238h-4.183l.58-3.265c.057-.334.029-.519.007-.599-.188-.69-.75-1.136-1.432-1.136-.213,0-.428.044-.64.132-.254.105-.503.367-.682.719l-2.193,4.149h-1.456c-1.657,0-3,1.343-3,3v4c0,1.657,1.343,3,3,3h0v-7c0-.552.448-1,1-1s1,.448,1,1v7h6.379c1.907,0,3.548-1.346,3.922-3.216l.639-3.196c.371-1.856-1.049-3.588-2.942-3.588Z"
            fill={svgFill}
          />
        </svg>
      );
    case 'lamp':
      return (
        <svg viewBox="0 0 24 24" width={svgWidth} height={svgHeight}>
          <path
            d="m19.969 6.06c-.074-.75-.477-1.42-1.103-1.837l-5.067-3.378c-.842-.562-1.786-.845-2.799-.845-.332 0-.666.033-.999.102-1.325.271-2.468 1.052-3.218 2.197-.93 1.42-1.026 3.231-.319 4.822l-1.415 1.415c-1.322 1.323-2.05 3.081-2.05 4.95v8.515h-1.999c-.552 0-1 .447-1 1s.448 1 1 1h6c.552 0 1-.447 1-1s-.448-1-1-1h-2v-8.516c0-1.335.52-2.591 1.464-3.536l1.069-1.069 2.669 4.004c.461.697 1.253 1.118 2.088 1.116.662 0 1.295-.261 1.769-.734l.844-.844c.982.807 2.429.763 3.346-.155s.961-2.364.155-3.346l.843-.843c.533-.533.796-1.269.722-2.019zm2.238 8.733c.391.391.391 1.023 0 1.414s-1.023.391-1.414 0l-1-1c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0zm-4.207 1.207v1c0 .553-.448 1-1 1s-1-.447-1-1v-1c0-.553.448-1 1-1s1 .447 1 1zm6-5c0 .553-.448 1-1 1h-1c-.552 0-1-.447-1-1s.448-1 1-1h1c.552 0 1 .447 1 1z"
            fill={svgFill}
          />
        </svg>
      );
    case 'confirm':
      return (
        <svg viewBox="0 0 24 24" width={svgWidth} height={svgHeight}>
          <path
            d="m14.121,17.122l6.879-6.879v-6.242c0-2.206-1.794-4-4-4H7C4.794,0,3,1.794,3,4v6.243l6.878,6.879c1.134,1.133,3.11,1.133,4.243,0Zm-6.802-8.585c-.404-.376-.428-1.009-.052-1.413.377-.405,1.011-.426,1.413-.052l1.851,1.721c.269.268.666.269.911.024l3.863-3.724c.398-.384,1.031-.371,1.414.025.384.397.372,1.031-.025,1.414l-3.851,3.712c-.504.504-1.171.756-1.839.756-.673,0-1.348-.256-1.861-.768l-1.824-1.696Zm16.681,4.171v6.292c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5v-6.292c0-.746.184-1.472.5-2.137l7.965,7.966c.945.944,2.2,1.464,3.536,1.464s2.591-.52,3.535-1.464l7.965-7.966c.316.665.5,1.392.5,2.137Z"
            fill={svgFill}
          />
        </svg>
      );
    case 'file':
      return (
        <svg viewBox="0 0 24 24" width={svgWidth} height={svgHeight}>
          <path
            d="m13,9c-1.105,0-2-.895-2-2V3h-5.5c-1.378,0-2.5,1.122-2.5,2.5v13c0,1.378,1.122,2.5,2.5,2.5h3c.829,0,1.5.671,1.5,1.5s-.671,1.5-1.5,1.5h-3c-3.033,0-5.5-2.467-5.5-5.5V5.5C0,2.467,2.467,0,5.5,0h6.343c1.469,0,2.85.572,3.889,1.611l2.657,2.657c1.039,1.039,1.611,2.419,1.611,3.889v1.343c0,.829-.671,1.5-1.5,1.5s-1.5-.671-1.5-1.5v-.5h-4Zm10.512,3.849c-.875-1.07-2.456-1.129-3.409-.176l-6.808,6.808c-.813.813-1.269,1.915-1.269,3.064v.955c0,.276.224.5.5.5h.955c1.149,0,2.252-.457,3.064-1.269l6.715-6.715c.85-.85,1.013-2.236.252-3.167Z"
            fill={svgFill}
          />
        </svg>
      );
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" width={svgWidth} height={svgHeight}>
          <path
            d="m18.5,2h-.5v-.5c0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5,1.5v.5h-6v-.5c0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5,1.5v.5h-.5C2.468,2,0,4.467,0,7.5v11c0,3.033,2.468,5.5,5.5,5.5h13c3.032,0,5.5-2.467,5.5-5.5V7.5c0-3.033-2.468-5.5-5.5-5.5Zm0,19H5.5c-1.379,0-2.5-1.122-2.5-2.5v-9.5h18v9.5c0,1.378-1.121,2.5-2.5,2.5Zm-8.5-8.5v2c0,.828-.672,1.5-1.5,1.5h-2c-.828,0-1.5-.672-1.5-1.5v-2c0-.828.672-1.5,1.5-1.5h2c.828,0,1.5.672,1.5,1.5Z"
            fill={svgFill}
          />
        </svg>
      );
    case 'goback':
      return (
        <svg viewBox="0 0 24 24" width={svgWidth} height={svgHeight}>
          <path
            d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-2,13h-5v3.361c0,.695-.852,1.044-1.35,.552l-4.418-4.361c-.309-.305-.309-.799,0-1.104l4.418-4.361c.498-.492,1.35-.143,1.35,.552v3.361h5c.553,0,1,.448,1,1s-.447,1-1,1Z"
            fill={svgFill}
          />
        </svg>
      );
    case 'arrow_right':
      return (
        <svg viewBox="0 0 24 24" width={svgWidth} height={svgHeight}>
          <path
            d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z"
            fill={svgFill}
          />
        </svg>
      );
    case 'location':
      return (
        <svg viewBox="0 0 24 24" width={svgWidth} height={svgHeight}>
          <path
            d="m16.949,2.05c-1.321-1.322-3.079-2.05-4.949-2.05s-3.627.728-4.95,2.05c-2.729,2.729-2.729,7.17.008,9.907l2.495,2.44c.675.66,1.561.99,2.447.99s1.772-.33,2.447-.99l2.502-2.448c1.322-1.322,2.051-3.08,2.051-4.95s-.729-3.627-2.051-4.95Zm-4.949,7.94c-1.657,0-3-1.343-3-3s1.343-3,3-3,3,1.343,3,3-1.343,3-3,3Zm-4.567,5.131l-.122.879H.628l.459-2.676c.246-1.435,1.23-2.577,2.524-3.066.449,1.156,1.14,2.219,2.049,3.129l1.773,1.734ZM.285,18h6.747l-.834,6h-2.198c-1.178,0-2.291-.516-3.052-1.415-.762-.899-1.087-2.081-.893-3.243l.23-1.342Zm14.862,0l.835,6h-7.765l.834-6h6.096Zm8.225-2h-6.485l-.146-1.049,1.622-1.587c.899-.899,1.584-1.954,2.03-3.104,1.292.49,2.274,1.63,2.52,3.064l.459,2.676Zm-.32,6.586c-.762.898-1.874,1.414-3.052,1.414h-2l-.835-6h6.55l.229,1.338c.194,1.167-.131,2.349-.893,3.248Z"
            fill={svgFill}
          />
        </svg>
      );
    case 'bookmark':
      return (
        <svg viewBox="0 0 24 24" width={svgWidth} height={svgHeight}>
          <path
            d="M2.849,23.55a2.954,2.954,0,0,0,3.266-.644L12,17.053l5.885,5.853a2.956,2.956,0,0,0,2.1.881,3.05,3.05,0,0,0,1.17-.237A2.953,2.953,0,0,0,23,20.779V5a5.006,5.006,0,0,0-5-5H6A5.006,5.006,0,0,0,1,5V20.779A2.953,2.953,0,0,0,2.849,23.55Z"
            fill={svgFill}
          />
        </svg>
      );
    case 'store':
      return (
        <svg viewBox="0 0 24 24" width={svgWidth} height={svgHeight}>
          <path
            d="M24,8.5c0-.132-.018-.264-.052-.392l-1.146-4.226c-.715-2.322-2.827-3.882-5.257-3.882H6.454C4.024,0,1.912,1.561,1.184,3.932L.052,8.108c-.201,1.159,.272,2.363,.948,3.215v8.177c0,2.481,2.019,4.5,4.5,4.5h5c2.481,0,4.5-2.019,4.5-4.5v-7.26c.176-.118,.343-.248,.5-.389,.797,.714,1.848,1.149,3,1.149h1c.169,0,.336-.01,.5-.028v9.528c.034,1.972,2.967,1.971,3,0V11.323c.624-.773,1-1.755,1-2.823Zm-12,11c0,.827-.673,1.5-1.5,1.5H5.5c-.827,0-1.5-.673-1.5-1.5v-.5H12v.5Zm0-3.5H4v-3.028c.164,.018,.331,.028,.5,.028h1c1.152,0,2.203-.435,3-1.149,.797,.714,1.848,1.149,3,1.149h.5v3Zm7.5-6h-1c-.827,0-1.5-.673-1.5-1.5s-.672-1.5-1.5-1.5-1.5,.671-1.5,1.5-.673,1.5-1.5,1.5h-1c-.827,0-1.5-.673-1.5-1.5s-.671-1.5-1.5-1.5-1.5,.671-1.5,1.5-.673,1.5-1.5,1.5h-1c-.771,0-1.408-.585-1.491-1.334l1.056-3.901c.325-1.056,1.285-1.765,2.389-1.765h.546v.5c.033,1.972,2.967,1.971,3,0v-.5h4v.5c.034,1.972,2.967,1.971,3,0v-.5h.546c1.104,0,2.064,.709,2.375,1.716l1.07,3.95c-.083,.749-.72,1.334-1.491,1.334Z"
            fill={svgFill}
          />
        </svg>
      );
    case 'ticket':
      return (
        <svg viewBox="0 0 24 24" width={svgWidth} height={svgHeight}>
          <path
            d="M21,21H3c-1.657,0-3-1.343-3-3v-4l1.096,.003c1.1-.029,1.986-.855,1.986-1.962s-.884-2.009-1.982-2.04l-1.1,.003V6c0-1.657,1.343-3,3-3H21c1.657,0,3,1.343,3,3v4h-.888c-.997,0-1.922,.679-2.084,1.662-.206,1.252,.758,2.338,1.972,2.338h1v4c0,1.657-1.343,3-3,3Z"
            fill={svgFill}
          />
        </svg>
      );
    default:
      return <p>undefined</p>;
  }
}
