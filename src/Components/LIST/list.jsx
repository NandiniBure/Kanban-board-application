import React from "react";

import "./list.css";
import Card from "../CARD/card";

let cardCount = 0;

export default function List(props) {
	return (
		<>
			<div className='list-container'>
				<div className='list-header'>
					<div className='list-header-left'>
						{
							{
								status: (
									<>
										{
											{
												Backlog: (
													<div className='list-icon'>
														<svg
															width='14'
															height='14'
															viewBox='0 0 14 14'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<path
																d='M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z'
																stroke='#95999F'
																stroke-width='2'
																stroke-dasharray='1.4 1.74'
															/>
														</svg>
													</div>
												),
												Todo: (
													<div className='list-icon'>
														<svg
															width='14'
															height='14'
															viewBox='0 0 14 14'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<path
																d='M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z'
																stroke='#B8B8B8'
																stroke-width='2'
															/>
														</svg>
													</div>
												),
												"In progress": (
													<div className='list-icon'>
														<svg
															width='14'
															height='14'
															viewBox='0 0 14 14'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<path
																d='M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z'
																fill='white'
																stroke='#F2BE00'
																stroke-width='2'
															/>
															<path
																d='M9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7Z'
																stroke='#F2BE00'
																stroke-width='4'
															/>
														</svg>
													</div>
												),
												Done: (
													<div className='list-icon'>
														<svg
															width='14'
															height='14'
															viewBox='0 0 14 14'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<path
																d='M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z'
																fill='#5E6AD2'
																stroke='#5E6AD2'
																stroke-width='2'
															/>
															<path
																d='M10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10C8.65685 10 10 8.65685 10 7Z'
																stroke='#5E6AD2'
																stroke-width='6'
																stroke-dasharray='18.85 100'
															/>
															<path
																d='M10.951 4.24896C11.283 4.58091 11.283 5.11909 10.951 5.45104L5.95104 10.451C5.61909 10.783 5.0809 10.783 4.74896 10.451L2.74896 8.45104C2.41701 8.11909 2.41701 7.5809 2.74896 7.24896C3.0809 6.91701 3.61909 6.91701 3.95104 7.24896L5.35 8.64792L9.74896 4.24896C10.0809 3.91701 10.6191 3.91701 10.951 4.24896Z'
																fill='#FBFBFB'
															/>
														</svg>
													</div>
												),
												Cancelled: (
													<div className='list-icon'>
														<svg
															width='14'
															height='14'
															viewBox='0 0 14 14'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<path
																d='M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z'
																fill='#96A3B4'
																stroke='#96A3B4'
																stroke-width='2'
															/>
															<path
																d='M10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10C8.65685 10 10 8.65685 10 7Z'
																stroke='#96A3B4'
																stroke-width='6'
																stroke-dasharray='18.85 100'
															/>
															<path
																d='M6.99682 7.68089L4.81753 9.86018C4.72008 9.95763 4.60934 10.0041 4.48532 9.99971C4.36129 9.99528 4.25055 9.94434 4.15311 9.84689C4.05566 9.74945 4.00693 9.6365 4.00693 9.50804C4.00693 9.37959 4.05566 9.26663 4.15311 9.16919L6.31911 7.00318L4.13982 4.82388C4.04237 4.72643 3.99586 4.61348 4.00029 4.48503C4.00472 4.35657 4.05566 4.24362 4.15311 4.14617C4.25055 4.04872 4.36351 4 4.49196 4C4.62041 4 4.73337 4.04872 4.83081 4.14617L6.99682 6.32547L9.17612 4.14617C9.27357 4.04872 9.38652 4 9.51497 4C9.64343 4 9.75638 4.04872 9.85383 4.14617C9.95128 4.24362 10 4.35657 10 4.48503C10 4.61348 9.95128 4.72643 9.85383 4.82388L7.67453 7.00318L9.85383 9.18247C9.95128 9.27992 10 9.39066 10 9.51468C10 9.63871 9.95128 9.74945 9.85383 9.84689C9.75638 9.94434 9.64343 9.99307 9.51497 9.99307C9.38652 9.99307 9.27357 9.94434 9.17612 9.84689L6.99682 7.68089Z'
																fill='#E8EAED'
															/>
														</svg>
													</div>
												),
											}[props.listTitle]
										}{" "}
									</>
								),
								user: <></>,
								priority: (
									<>
										{
											{
												0: (
													<div className='card-tag-icon'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															width='22'
															height='22'
															viewBox='0 0 1024 1024'
														>
															<path
																fill='currentColor'
																d='M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z'
															/>
														</svg>
													</div>
												),
												1: (
													<div className='card-tag-icon'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															width='22'
															height='22'
															viewBox='0 0 48 48'
														>
															<g fill='currentColor'>
																<path
																	fill-rule='evenodd'
																	d='M35 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4Zm-1 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21Zm3-1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V21a1 1 0 0 0-1-1h-4Z'
																	clip-rule='evenodd'
																/>
																<path d='M6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z' />
															</g>
														</svg>
													</div>
												),
												2: (
													<div className='card-tag-icon'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															width='22'
															height='22'
															viewBox='0 0 48 48'
														>
															<g fill='currentColor'>
																<path d='M19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z' />
																<path
																	fill-rule='evenodd'
																	d='M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9Zm3-1a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4Z'
																	clip-rule='evenodd'
																/>
															</g>
														</svg>
													</div>
												),
												3: (
													<div className='card-tag-icon'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															width='22'
															height='22'
															viewBox='0 0 48 48'
														>
															<path
																fill='currentColor'
																d='M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM9 30a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H9Z'
															/>
														</svg>
													</div>
												),
												4: (
													<div className='card-tag-icon'>
														<svg
															width='16'
															height='16'
															viewBox='0 0 16 16'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<path
																d='M3 1C1.91067 1 1 1.91067 1 3V13C1 14.0893 1.91067 15 3 15H13C14.0893 15 15 14.0893 15 13V3C15 1.91067 14.0893 1 13 1H3ZM7 4H9L8.75391 8.99836H7.25L7 4ZM9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z'
																fill='#FB773F'
															/>
														</svg>
													</div>
												),
											}[props.listTitle]
										}{" "}
									</>
								),
							}[props.groupValue]
						}

						<div className='list-title'>
							{
								{
									priority: (
										<>
											{props.priorityList
												? props.priorityList.map((priorityProperty) =>
														priorityProperty.priority === props.listTitle ? (
															<>{priorityProperty.name}</>
														) : null
												  )
												: null}
										</>
									),
									status: <>{props.listTitle}</>,
									user: <>{props.listTitle}</>,
								}[props.groupValue]
							}
						</div>
						<div className='list-sum'>{cardCount}</div>
					</div>
					<div className='list-header-right'>
						<div className='list-add-item'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='18'
								height='18'
								viewBox='0 0 24 24'
							>
								<path
									fill='currentColor'
									d='M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z'
								/>
							</svg>
						</div>
						<div className='list-option-item'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='18'
								height='18'
								viewBox='0 0 20 20'
							>
								<path
									fill='currentColor'
									d='M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm-7 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 3 7.8zm14 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 17 7.8z'
								/>
							</svg>
						</div>
					</div>
				</div>

				<div className='list-card-items'>
					{props.ticketDetails.map((ticket) => {
						if (ticket.status === props.listTitle) {
							cardCount++;
							return <Card cardDetails={ticket} />;
						} else if (ticket.priority === props.listTitle) {
							cardCount++;
							return <Card cardDetails={ticket} />;
						} else if (ticket.userObj.name === props.listTitle) {
							cardCount++;
							return <Card cardDetails={ticket} />;
						}
						return null;
					}, (cardCount = 0))}
				</div>
			</div>
		</>
	);
}
