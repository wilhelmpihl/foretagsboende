const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

function readTable(name) {
  const file = path.join(DATA_DIR, `${name}.json`);
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}
function writeTable(name, data) {
  fs.writeFileSync(path.join(DATA_DIR, `${name}.json`), JSON.stringify(data, null, 2));
}
function nextId(rows) {
  return rows.length === 0 ? 1 : Math.max(...rows.map(r => r.id)) + 1;
}

const db = {
  // ── USERS ──
  getUsers: () => readTable('users'),
  getUserById: (id) => readTable('users').find(u => u.id === id) || null,
  getUserByEmail: (email) => readTable('users').find(u => u.email === email.toLowerCase().trim()) || null,
  createUser: (data) => {
    const users = readTable('users');
    const user = { id: nextId(users), ...data, email: data.email.toLowerCase().trim(), created_at: new Date().toISOString() };
    users.push(user);
    writeTable('users', users);
    return user;
  },

  // ── LISTINGS ──
  getListings: (filters = {}) => {
    let rows = readTable('listings').filter(l => l.is_available);
    if (filters.area) rows = rows.filter(l => l.area === filters.area);
    if (filters.maxPrice) rows = rows.filter(l => l.price_per_night <= parseInt(filters.maxPrice));
    if (filters.minPrice) rows = rows.filter(l => l.price_per_night >= parseInt(filters.minPrice));
    if (filters.persons) rows = rows.filter(l => l.max_persons >= parseInt(filters.persons));
    if (filters.search) {
      const s = filters.search.toLowerCase();
      rows = rows.filter(l => l.title.toLowerCase().includes(s) || l.area.toLowerCase().includes(s));
    }
    return rows.sort((a, b) => b.rating - a.rating);
  },
  getListingById: (id) => readTable('listings').find(l => l.id === parseInt(id)) || null,

  // ── BOOKINGS ──
  getBookings: () => readTable('bookings'),
  getBookingsByUser: (userId, email) => readTable('bookings').filter(b => b.user_id === userId || b.contact_email === email),
  createBooking: (data) => {
    const bookings = readTable('bookings');
    const booking = { id: nextId(bookings), ...data, created_at: new Date().toISOString() };
    bookings.push(booking);
    writeTable('bookings', bookings);
    return booking;
  },
  updateBookingStatus: (id, status) => {
    const bookings = readTable('bookings');
    const idx = bookings.findIndex(b => b.id === parseInt(id));
    if (idx >= 0) { bookings[idx].status = status; writeTable('bookings', bookings); }
  },
};

function initDb() {
  // Seed users
  if (readTable('users').length === 0) {
    writeTable('users', [
      { id: 1, email: 'admin@residence.se', password_hash: bcrypt.hashSync('admin123', 10), name: 'Admin', role: 'admin', company_name: 'Residence Studio', phone: '+46 70 000 00 00', created_at: new Date().toISOString() },
      { id: 2, email: 'hr@volvocars.com', password_hash: bcrypt.hashSync('volvo123', 10), name: 'Anna Björk', role: 'company', company_name: 'Volvo Cars', phone: '+46 72 123 45 67', created_at: new Date().toISOString() },
      { id: 3, email: 'demo@company.se', password_hash: bcrypt.hashSync('demo123', 10), name: 'Erik Svensson', role: 'company', company_name: 'Ericsson AB', phone: '+46 73 456 78 90', created_at: new Date().toISOString() },
    ]);
  }

  // Seed listings
  if (readTable('listings').length === 0) {
    writeTable('listings', [
      { id:1, title:'Lyxlägenhet med älvutsikt', area:'Lindholmen', address:'Lindholmspiren 4', price_per_night:1850, bedrooms:3, bathrooms:2, max_persons:6, amenities:['Wifi','Parkering','Kök','Diskmaskin','TV','Balkong','Tvättmaskin'], description:'Spektakulär lägenhet med panoramautsikt. Perfekt för ledningsgrupper.', image_url:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format', rating:4.97, reviews_count:43, is_available:true, badge:'Populär' },
      { id:2, title:'Design-svit i Haga', area:'Haga', address:'Haga Nygata 22', price_per_night:1250, bedrooms:2, bathrooms:1, max_persons:4, amenities:['Wifi','Kök','TV','Cykelförvaring'], description:'Välrenoverad 1800-talsfastighet med moderna bekvämligheter.', image_url:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80&auto=format', rating:4.89, reviews_count:67, is_available:true, badge:'Toppbetyg' },
      { id:3, title:'Minimalistisk studio, Avenyn', area:'Avenyn', address:'Kungsportsavenyn 18', price_per_night:950, bedrooms:1, bathrooms:1, max_persons:2, amenities:['Wifi','Kök','Gymaccess'], description:'Modern studio med direkt access till Avenyn.', image_url:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80&auto=format', rating:4.82, reviews_count:91, is_available:true, badge:null },
      { id:4, title:'Strandnära villa, Majorna', area:'Majorna', address:'Karl Johansgatan 55', price_per_night:2200, bedrooms:4, bathrooms:2, max_persons:8, amenities:['Wifi','Parkering','Kök','Trädgård','Terrass'], description:'Rymlig villa i Majornas kulturkvarter med privat trädgård.', image_url:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80&auto=format', rating:4.95, reviews_count:28, is_available:true, badge:'Nytt' },
      { id:5, title:'Executive-lägenhet, Vasastan', area:'Vasastan', address:'Vasagatan 40', price_per_night:1450, bedrooms:2, bathrooms:2, max_persons:4, amenities:['Wifi','Kök','Arbetsplats','TV','Tvättmaskin'], description:'Elegant lägenhet nära Chalmers och Handelshögskolan.', image_url:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80&auto=format', rating:4.78, reviews_count:55, is_available:true, badge:null },
      { id:6, title:'Penthouse med takterrass', area:'Eriksberg', address:'Eriksberg Allé 8', price_per_night:2800, bedrooms:3, bathrooms:2, max_persons:6, amenities:['Wifi','Takterrass','Parkering','Kök','Hushållerska','Gym'], description:'Exklusivt penthouse med 180° utsikt. Hushållerska ingår.', image_url:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format', rating:5.0, reviews_count:19, is_available:true, badge:'Exklusiv' },
      { id:7, title:'Centralt läge, Centrum', area:'Centrum', address:'Drottninggatan 10', price_per_night:1100, bedrooms:2, bathrooms:1, max_persons:4, amenities:['Wifi','Kök','TV','Hiss'], description:'Centralt belägen, gångavstånd till allt.', image_url:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&auto=format', rating:4.71, reviews_count:108, is_available:true, badge:null },
      { id:8, title:'Tech-hub, Johanneberg', area:'Johanneberg', address:'Eklandagatan 25', price_per_night:1350, bedrooms:3, bathrooms:2, max_persons:5, amenities:['Wifi 1Gbit','Arbetsplatser','Whiteboardvägg','Kök','Parkering'], description:'Designad för teknikteam. 1Gbit fiber, dubbla skärmar ingår.', image_url:'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80&auto=format', rating:4.91, reviews_count:34, is_available:true, badge:'Tech' },
    ]);
  }

  // Seed bookings
  if (readTable('bookings').length === 0) {
    writeTable('bookings', [
      { id:1, user_id:2, listing_id:1, check_in:'2026-03-20', check_out:'2026-04-20', persons:4, status:'confirmed', total_price:57350, company_name:'Volvo Cars', contact_name:'Anna Björk', contact_email:'hr@volvocars.com', contact_phone:'+46 72 123 45 67', notes:'Parkering krävs', created_at:new Date().toISOString() },
      { id:2, user_id:2, listing_id:3, check_in:'2026-04-01', check_out:'2026-04-14', persons:1, status:'confirmed', total_price:12350, company_name:'Volvo Cars', contact_name:'Anna Björk', contact_email:'hr@volvocars.com', contact_phone:null, notes:null, created_at:new Date().toISOString() },
      { id:3, user_id:3, listing_id:5, check_in:'2026-03-25', check_out:'2026-05-01', persons:2, status:'pending', total_price:52200, company_name:'Ericsson AB', contact_name:'Erik Svensson', contact_email:'demo@company.se', contact_phone:'+46 73 456 78 90', notes:'Behöver snabbt internet', created_at:new Date().toISOString() },
    ]);
  }

  console.log('Database ready.');
  return db;
}

module.exports = { db, initDb };
