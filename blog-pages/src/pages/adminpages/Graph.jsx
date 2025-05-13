// import React from 'react'

// const Graph = () => {
//     const canvasRef = React.useRef(null);

//       React.useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');
//         const nodes = [
//           { x: 50, y: 50, id: 0 },
//           { x: 150, y: 50, id: 1 },
//           { x: 100, y: 150, id: 2 },
//           { x: 200, y: 150, id: 3 },
//           { x: 150, y: 250, id: 4 },
//         ];
//         const edges = [
//           { from: 0, to: 1, weight: 10 },
//           { from: 1, to: 2, weight: 15 },
//           { from: 0, to: 2, weight: 20 },
//           { from: 2, to: 3, weight: 10 },
//           { from: 3, to: 4, weight: 25 },
//           { from: 2, to: 4, weight: 30 },
//         ];

//         const drawGraph = () => {
//           ctx.clearRect(0, 0, canvas.width, canvas.height);
          
//           // Draw edges
//           ctx.strokeStyle = 'gray';
//           ctx.lineWidth = 2;
//           edges.forEach(edge => {
//             const fromNode = nodes[edge.from];
//             const toNode = nodes[edge.to];
//             ctx.beginPath();
//             ctx.moveTo(fromNode.x, fromNode.y);
//             ctx.lineTo(toNode.x, toNode.y);
//             ctx.stroke();
//             // Draw weight
//             ctx.fillStyle = 'black';
//             ctx.font = '12px Arial';
//             const midX = (fromNode.x + toNode.x) / 2;
//             const midY = (fromNode.y + toNode.y) / 2;
//             ctx.fillText(edge.weight, midX, midY);
//           });

//           // Draw nodes
//           nodes.forEach(node => {
//             ctx.beginPath();
//             ctx.arc(node.x, node.y, 10, 0, 2 * Math.PI);
//             ctx.fillStyle = 'blue';
//             ctx.fill();
//             ctx.strokeStyle = 'black';
//             ctx.stroke();
//             ctx.fillStyle = 'white';
//             ctx.font = '12px Arial';
//             ctx.textAlign = 'center';
//             ctx.textBaseline = 'middle';
//             ctx.fillText(node.id, node.x, node.y);
//           });
//         };

//         const dijkstra = (start, end) => {
//           const distances = new Array(nodes.length).fill(Infinity);
//           const prev = new Array(nodes.length).fill(null);
//           const visited = new Array(nodes.length).fill(false);
//           distances[start] = 0;

//           for (let i = 0; i < nodes.length; i++) {
//             let minDist = Infinity;
//             let minIndex = -1;
//             for (let j = 0; j < nodes.length; j++) {
//               if (!visited[j] && distances[j] < minDist) {
//                 minDist = distances[j];
//                 minIndex = j;
//               }
//             }
//             if (minIndex === -1) break;
//             visited[minIndex] = true;

//             edges.forEach(edge => {
//               if (edge.from === minIndex) {
//                 const dist = distances[minIndex] + edge.weight;
//                 if (dist < distances[edge.to]) {
//                   distances[edge.to] = dist;
//                   prev[edge.to] = minIndex;
//                 }
//               } else if (edge.to === minIndex) {
//                 const dist = distances[minIndex] + edge.weight;
//                 if (dist < distances[edge.from]) {
//                   distances[edge.from] = dist;
//                   prev[edge.from] = minIndex;
//                 }
//               }
//             });
//           }

//           const path = [];
//           let current = end;
//           while (current !== null) {
//             path.unshift(current);
//             current = prev[current];
//           }
//           return path;
//         };

//         const animatePath = () => {
//           const path = dijkstra(0, 4);
//           let index = 0;
//           const interval = setInterval(() => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             drawGraph();
//             for (let i = 0; i < index; i++) {
//               const fromNode = nodes[path[i]];
//               const toNode = nodes[path[i + 1]];
//               if (toNode) {
//                 ctx.beginPath();
//                 ctx.moveTo(fromNode.x, fromNode.y);
//                 ctx.lineTo(toNode.x, toNode.y);
//                 ctx.strokeStyle = 'red';
//                 ctx.lineWidth = 4;
//                 ctx.stroke();
//               }
//             }
//             index++;
//             if (index > path.length) clearInterval(interval);
//           }, 500);
//         };

//         drawGraph();
//         canvas.addEventListener('click', animatePath);

//         return () => canvas.removeEventListener('click', animatePath);
//       }, []);
//   return (
//     <>
//     <div>
//       <div className="p-6">
//           <h2 className="text-2xl font-bold mb-4">Graph Game (Pathfinding)</h2>
//           <p className="mb-4">Click to animate shortest path from node 0 to node 4.</p>
//           <canvas ref={canvasRef} width="400" height="300" className="border border-gray-300"></canvas>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Graph

import React from 'react';

const BarGraph = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const data = [
      { label: 'A', value: 30 },
      { label: 'B', value: 80 },
      { label: 'C', value: 45 },
      { label: 'D', value: 60 },
      { label: 'E', value: 20 },
    ];

    const drawBarGraph = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const barWidth = width / data.length - 20;
      const maxVal = Math.max(...data.map(d => d.value));

      data.forEach((d, i) => {
        const x = i * (barWidth + 20) + 20;
        const barHeight = (d.value / maxVal) * (height - 40);
        const y = height - barHeight - 20;

        // Draw bar
        ctx.fillStyle = 'blue';
        ctx.fillRect(x, y, barWidth, barHeight);

        // Draw label
        ctx.fillStyle = 'black';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(d.label, x + barWidth / 2, height - 5);

        // Draw value
        ctx.fillText(d.value, x + barWidth / 2, y - 5);
      });
    };

    drawBarGraph();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Bar Graph</h2>
      <p className="mb-4">Displays a simple bar graph of values.</p>
      <canvas ref={canvasRef} width="500" height="300" className="border border-gray-300"></canvas>
    </div>
  );
};

export default BarGraph;
