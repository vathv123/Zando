const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve index.html

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/transcribe', async (req, res) => {
  const videoUrl = req.body.url;
  const audioPath = 'audio.mp3';

  exec(`yt-dlp -x --audio-format mp3 -o "${audioPath}" "${videoUrl}"`, async (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to download audio' });
    }

    const form = new FormData();
    form.append('file', fs.createReadStream(audioPath));
    form.append('model', 'whisper-1');

    try {
      const whisperRes = await axios.post('https://api.openai.com/v1/audio/transcriptions', form, {
        headers: {
          ...form.getHeaders(),
          Authorization: 'Bearer YOUR_OPENAI_API_KEY' // 👈 Replace with real key
        }
      });

      res.json({ transcript: whisperRes.data.text });
    } catch (error) {
      console.error(error.response?.data || error.message);
      res.status(500).json({ error: 'Failed to transcribe audio' });
    } finally {
      fs.unlinkSync(audioPath);
    }
  });
});

app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});
