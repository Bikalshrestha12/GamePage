import React from 'react'
import StyleSetting from './StyleSetting';
import Footers from './Footers';

const Setting = () => {
    const [navColor, setNavColor] = React.useState('#ffffff');
      const [navSize, setNavSize] = React.useState(16);
      const [navFont, setNavFont] = React.useState('Arial');
      const [footerColor, setFooterColor] = React.useState('#ffffff');
      const [footerSize, setFooterSize] = React.useState(14);
      const [footerFont, setFooterFont] = React.useState('Arial');

      const handleNavUpdate = () => {
        setNavStyles({ textColor: navColor, textSize: navSize, textFont: navFont });
      };

      const handleFooterUpdate = () => {
        setFooterStyles({ textColor: footerColor, textSize: footerSize, textFont: footerFont });
      };

      const [navStyles, setNavStyles] = React.useState({
              textColor: '#ffffff',
              textSize: 16,
              textFont: 'Arial',
            });
            const [footerStyles, setFooterStyles] = React.useState({
              textColor: '#ffffff',
              textSize: 14,
              textFont: 'Arial',
            });

    const users = [
        { id: 1, username: "Player1", email: "player1@example.com", status: "Active" },
        { id: 2, username: "Player2", email: "player2@example.com", status: "Banned" },
        { id: 3, username: "Player3", email: "player3@example.com", status: "Active" },
      ];

  return (
    <div>
      <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Game Settings</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="max-players">
                Max Question per Match
              </label>
              <input
                type="number"
                id="max-players"
                className="w-full p-2 border rounded"
                defaultValue="100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="game-mode">
                Default Game Mode
              </label>
              <select id="game-mode" className="w-full p-2 border rounded">
                <option>Team Deathmatch</option>
                <option>Capture the Flag</option>
                <option>Free for All</option>
              </select>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Save Settings
            </button>
          </div>
        </div>

        <StyleSetting 
          setNavStyles={setNavStyles} 
          setFooterStyles={setFooterStyles} 
        />

                    <Footers 
                    textColor={footerStyles.textColor}
                    textSize={footerStyles.textSize} 
                    textFont={footerStyles.textFont}
                    backgroundColor={footerStyles.backgroundColor}
                    padding={footerStyles.padding}
                    margin={footerStyles.margin}
                    boxShadow={footerStyles.boxShadow}
                    hoverEffects={footerStyles.hoverEffects}
                    linkStyles={footerStyles.linkStyles}
                    />
    </div>
  )
}

export default Setting
