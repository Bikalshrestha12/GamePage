import React from 'react'

const StyleSetting = ({ setNavStyles, setFooterStyles }) => {
    // const [navColor, setNavColor] = React.useState('#ffffff');
    //   const [navSize, setNavSize] = React.useState(16);
    //   const [navFont, setNavFont] = React.useState('Arial');
    //   const [footerColor, setFooterColor] = React.useState('#ffffff');
    //   const [footerSize, setFooterSize] = React.useState(14);
    //   const [footerFont, setFooterFont] = React.useState('Arial');

    const [navColor, setNavColor] = React.useState('#ffffff');
  const [navSize, setNavSize] = React.useState(16);
  const [navFont, setNavFont] = React.useState('Arial');

  const [footerColor, setFooterColor] = React.useState('#ffffff');
  const [footerSize, setFooterSize] = React.useState(14);
  const [footerFont, setFooterFont] = React.useState('Arial');
  const [footerBg, setFooterBg] = React.useState('#1f2937'); // Tailwind gray-800
  const [footerPadding, setFooterPadding] = React.useState('20px');
  const [footerMargin, setFooterMargin] = React.useState('0px');
  const [footerBoxShadow, setFooterBoxShadow] = React.useState('0 4px 6px rgba(0,0,0,0.1)');
  const [hoverInputBorderColor, setHoverInputBorderColor] = React.useState('#e879f9');
  const [hoverInputShadow, setHoverInputShadow] = React.useState('0 0 10px #a855f7');
  const [hoverButtonBg, setHoverButtonBg] = React.useState('#6b21a8');

    //   const handleNavUpdate = () => {
    //     setNavStyles({ textColor: navColor, textSize: navSize, textFont: navFont });
    //   };
    const handleNavUpdate = () => {
        setNavStyles({ textColor: navColor, textSize: navSize, textFont: navFont });
      };
    

    //   const handleFooterUpdate = () => {
    //     setFooterStyles({ textColor: footerColor, textSize: footerSize, textFont: footerFont });
    //   };
    const handleFooterUpdate = () => {
        setFooterStyles({
          textColor: footerColor,
          textSize: footerSize,
          textFont: footerFont,
          backgroundColor: footerBg,
          padding: footerPadding,
          margin: footerMargin,
          boxShadow: footerBoxShadow,
          hoverEffects: {
            input: { borderColor: hoverInputBorderColor, boxShadow: hoverInputShadow },
            button: { backgroundColor: hoverButtonBg }
          },
          linkStyles: {
            color: "#e5e7eb",
            transition: "all 0.3s",
            hover: {
              color: "#f472b6",
              textDecoration: "underline"
            }
          }
        });
      };

  return (
    <div>
      <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Style Settings</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Navbar Styles</h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Text Color</label>
              <input
                type="color"
                value={navColor}
                onChange={e => setNavColor(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Text Size (px)</label>
              <input
                type="number"
                value={navSize}
                onChange={e => setNavSize(e.target.value)}
                className="w-full p-2 border rounded"
                min="10"
                max="30"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Font</label>
              <select
                value={navFont}
                onChange={e => setNavFont(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option>Arial</option>
                <option>Times New Roman</option>
                <option>Helvetica</option>
                <option>Roboto</option>
              </select>
            </div>
            <button
              onClick={handleNavUpdate}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
            >
              Update Navbar
            </button>

            {/* Footer Settings */}
        <h3 className="text-lg font-semibold mb-2">Footer Styles</h3>
        <div className="mb-4">
          <label className="block font-bold mb-2">Text Color</label>
          <input type="color" value={footerColor} onChange={e => setFooterColor(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Text Size (px)</label>
          <input type="number" value={footerSize} onChange={e => setFooterSize(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Font</label>
          <select value={footerFont} onChange={e => setFooterFont(e.target.value)} className="w-full p-2 border rounded">
            <option>Arial</option>
            <option>Times New Roman</option>
            <option>Helvetica</option>
            <option>Roboto</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Background Color</label>
          <input type="color" value={footerBg} onChange={e => setFooterBg(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Padding</label>
          <input type="text" value={footerPadding} onChange={e => setFooterPadding(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Margin</label>
          <input type="text" value={footerMargin} onChange={e => setFooterMargin(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Box Shadow</label>
          <input type="text" value={footerBoxShadow} onChange={e => setFooterBoxShadow(e.target.value)} className="w-full p-2 border rounded" />
        </div>

        {/* Hover Effects */}
        <h4 className="text-md font-semibold mt-4 mb-2">Hover Effects</h4>
        <div className="mb-4">
          <label className="block font-bold mb-2">Input Border Color</label>
          <input type="color" value={hoverInputBorderColor} onChange={e => setHoverInputBorderColor(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Input Box Shadow</label>
          <input type="text" value={hoverInputShadow} onChange={e => setHoverInputShadow(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Button Hover Background</label>
          <input type="color" value={hoverButtonBg} onChange={e => setHoverButtonBg(e.target.value)} className="w-full p-2 border rounded" />
        </div>

        <button
          onClick={handleFooterUpdate}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Footer
        </button>
          </div>
        </div>
    </div>
  )
}

export default StyleSetting
