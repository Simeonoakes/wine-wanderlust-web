export interface Env {
  RESEND_API_KEY?: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const { request, env } = context;
    const data = await request.json();

    // Validate required fields
    if (!data.from_name || !data.from_email) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Send email using Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'In Vino Veritas <onboarding@resend.dev>',
        to: data.to_email || 'invinoveritasexperiences@gmail.com',
        subject: `New Booking Enquiry: ${data.journey_type || 'General Enquiry'}`,
        html: `
          <h2>New Booking Enquiry</h2>
          <p><strong>Name:</strong> ${data.from_name}</p>
          <p><strong>Email:</strong> ${data.from_email}</p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Journey Type:</strong> ${data.journey_type || 'General Enquiry'}</p>
          <p><strong>Party Size:</strong> ${data.party_size || 'Not specified'}</p>
          <p><strong>Preferred Date:</strong> ${data.preferred_date || 'Not specified'}</p>
          <p><strong>Airport:</strong> ${data.airport || 'Perpignan'}</p>
          <p><strong>Dietary Requirements:</strong> ${data.dietary_requirements || 'None'}</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.text();
      console.error('Resend API error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
