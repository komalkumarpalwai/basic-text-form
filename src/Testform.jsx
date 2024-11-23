import { useState } from 'react';

const Testform = () => {
  const [text, setText] = useState("enter your text");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

 
  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  const handleClear = () => {
    setText('');
  };

  const handleCapitalize = () => {
    setText(text.replace(/\b\w/g, (char) => char.toUpperCase()));
  };

  const handleReverse = () => {
    setText(text.split('').reverse().join(''));
  };

  const handleRemoveSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim());
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Text Converter</h2>

      <textarea
        name="mytext"
        id="2"
        rows="6"
        value={text}
        onChange={handleChange}
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      <div className="mt-4 flex flex-wrap justify-center space-x-4 gap-4">
        <button
          onClick={handleUppercase}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Convert to Uppercase
        </button>
        <button
          onClick={handleLowercase}
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
        >
          Convert to Lowercase
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
        >
          Clear Text
        </button>
        <button
          onClick={handleCapitalize}
          className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Capitalize First Letters
        </button>
        <button
          onClick={handleReverse}
          className="px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition duration-300"
        >
          Reverse Text
        </button>
        <button
          onClick={handleRemoveSpaces}
          className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition duration-300"
        >
          Remove Extra Spaces
        </button>
      </div>
    </div>
  );
};

export default Testform;
