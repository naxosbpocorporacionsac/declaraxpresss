<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    $data = $_POST;
}

$nombre   = trim($data['name']    ?? $data['nombre']   ?? '');
$email    = trim($data['email']   ?? '');
$whatsapp = trim($data['whatsapp'] ?? '');
$ruc      = trim($data['ruc']     ?? '');
$mensaje  = trim($data['message'] ?? $data['mensaje']  ?? '');

if (!$nombre || !$whatsapp) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Nombre y WhatsApp son requeridos']);
    exit;
}

$to      = 'info@declaraxpress.com';
$subject = "Nueva consulta de {$nombre} — Declara Xpress";

$body  = "Nombre:    {$nombre}\n";
$body .= "WhatsApp:  {$whatsapp}\n";
$body .= "Email:     " . ($email ?: '—') . "\n";
$body .= "RUC:       " . ($ruc   ?: '—') . "\n";
$body .= "Mensaje:   " . ($mensaje ?: '—') . "\n";

$headers  = "From: no-reply@declaraxpress.com\r\n";
$headers .= "Reply-To: " . ($email ?: 'info@declaraxpress.com') . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'No se pudo enviar. Intenta por WhatsApp.']);
}
