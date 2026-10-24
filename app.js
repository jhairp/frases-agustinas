/**
 * Frases Agustinas — Lógica de Interacción Minimalista
 * San Agustín de Hipona
 */

(function () {
  'use strict';

  // --- Elementos del DOM ---
  const quoteText = document.getElementById('quote-text');
  const quoteLatinWrapper = document.getElementById('quote-latin-wrapper');
  const quoteLatin = document.getElementById('quote-latin');
  const quoteSource = document.getElementById('quote-source');
  const btnRefresh = document.getElementById('btn-refresh-quote');
  const btnCopyQuote = document.getElementById('btn-copy-quote');
  const toastNotification = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');

  // --- Estado de la Rotación de Frases ---
  let unvisitedIndices = [];
  let currentQuote = null;
  let audioContext = null;

  // --- Selección Aleatoria sin Repetición Inmediata ---
  function getNextRandomQuote() {
    if (!SAN_AGUSTIN_QUOTES || SAN_AGUSTIN_QUOTES.length === 0) return null;

    if (unvisitedIndices.length === 0) {
      unvisitedIndices = SAN_AGUSTIN_QUOTES.map((_, i) => i);
    }

    let candidatePos = Math.floor(Math.random() * unvisitedIndices.length);
    let chosenIndex = unvisitedIndices[candidatePos];

    // Evitar que toque exactamente la misma frase que la actual si hay más de 1
    if (currentQuote && SAN_AGUSTIN_QUOTES.length > 1 && SAN_AGUSTIN_QUOTES[chosenIndex].id === currentQuote.id) {
      if (unvisitedIndices.length > 1) {
        candidatePos = (candidatePos + 1) % unvisitedIndices.length;
        chosenIndex = unvisitedIndices[candidatePos];
      }
    }

    unvisitedIndices.splice(candidatePos, 1);
    return SAN_AGUSTIN_QUOTES[chosenIndex];
  }

  // --- Renderizado con Transición Suave ---
  function renderQuote(quote) {
    if (!quote) return;
    currentQuote = quote;

    if (quoteText) {
      quoteText.classList.add('fading');

      setTimeout(() => {
        quoteText.textContent = quote.quote;

        if (quoteSource) {
          quoteSource.textContent = quote.source;
        }

        quoteText.classList.remove('fading');
      }, 220);
    }
  }

  // --- Efecto Sutil de Sonido Armónico al cambiar frase (Web Audio API) ---
  function playHarmonicChime() {
    try {
      if (!audioContext) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioCtx();
      }
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }

      const now = audioContext.currentTime;
      const freqs = [392.00, 587.33]; // Sol4 y Re5: sereno y contemplativo

      freqs.forEach((freq, idx) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        const vol = 0.045 / (idx + 1);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(vol, now + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.start(now);
        osc.stop(now + 1.3);
      });
    } catch (e) {
      // Audio no indispensable
    }
  }

  function nextQuote() {
    if (btnRefresh) {
      btnRefresh.classList.add('spinning');
      setTimeout(() => btnRefresh.classList.remove('spinning'), 650);
    }

    const quote = getNextRandomQuote();
    renderQuote(quote);
    playHarmonicChime();
  }

  // --- Copiar Frase al Portapapeles ---
  function copyCurrentQuote() {
    if (!currentQuote) return;
    const textToCopy = `«${currentQuote.quote}»\n— San Agustín (${currentQuote.source})`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('Cita copiada al portapapeles');
      }).catch(() => {
        fallbackCopy(textToCopy);
      });
    } else {
      fallbackCopy(textToCopy);
    }
  }

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast('Cita copiada al portapapeles');
    } catch (e) {
      showToast('No se pudo copiar');
    }
    document.body.removeChild(textarea);
  }

  // --- Notificación Toast ---
  let toastTimer = null;
  function showToast(msg) {
    if (!toastNotification || !toastMessage) return;
    toastMessage.textContent = msg;
    toastNotification.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 2200);
  }

  // --- Configuración de Eventos ---
  function init() {
    if (btnRefresh) {
      btnRefresh.addEventListener('click', nextQuote);
    }

    if (btnCopyQuote) {
      btnCopyQuote.addEventListener('click', copyCurrentQuote);
    }

    // Atajo de teclado: Barra espaciadora o Flecha Derecha
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.key === ' ' || e.key === 'ArrowRight') {
        const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
        if (tag !== 'input' && tag !== 'textarea') {
          e.preventDefault();
          nextQuote();
        }
      }
    });

    // Iniciar mostrando la primera frase
    nextQuote();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
